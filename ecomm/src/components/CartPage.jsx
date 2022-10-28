import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  Link, useNavigate } from "react-router-dom";
import { addToCart, clearCart } from "../Redux/Cart/Action";

export default function CartPage() {
  const { cart } = useSelector((state) => state.cart);
  const [bill, setBill] = useState(0);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (cart.length == 0) {
    navigate("/");
  }
  useEffect(() => {
    let sum = 50;
    cart?.forEach((ele) => {
      sum += ele.price;
    });
    setBill(sum);
  }, [cart]);

  return (
    <div className="checkout w-[90%] sm:w-[60%] md:w-[50%] lg:w-[40%]  m-auto mt-10 flex flex-col gap-4">
     { cart.length!=0?<div className="flex flex-col gap-4 p-2 py-4">
        {cart?.map((ele) => (
          <div key={ele.id} className="w-full flex gap-4 text-purple-600">
            <img src={ele.image} className="w-[27%] sm:w-[15%]" />
            <div className="flex-11">
              <p>{ele.title}</p>
              <p>Price: ₹{ele.price}</p>
            </div>
            {/* <Button onClick={()=>{dispatch(addToCart(ele))}}>+</Button> */}
          </div>
        ))}
        <p>+ ₹50 Delivery charges extra </p>
        <p>Total Bill:-₹{bill} </p>
        <div className="flex gap-4">
          <Button
            variant="contained"
            color="secondary"
            className="bg-[#653779] w-full"
            onClick={() => dispatch(clearCart())}
          >
            clear Cart
          </Button>
          <Button
            variant="contained"
            color="secondary"
            className="bg-[#653779] w-full"
            onClick={() => {
              alert("Your order is successfull.");
              navigate("/checkout");
            }}
          >
            Check out
          </Button>
        </div>
      </div>:<Link to="/" className="w-full bg-white text-2xl p-2 text-purple-600">Currently There is no item in the cart,Please Add some </Link>
    }
    </div>
  );
}
