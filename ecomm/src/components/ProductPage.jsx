import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../Redux/Products/Actions";
import PaginationComp from "./Pagination";

export default function ProductPage() {
  const [sort, setsort] = useState("asc");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { products, loading, numberOfPage, currentPage } = useSelector(
    (state) => state.products
  );
  useEffect(() => {
    dispatch(fetchProducts({ currentPage ,sort}));
  }, [currentPage,sort]);
  return (
    <div>
      <div className="flex justify-between gap-2 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[25%] m-auto my-4">
        {" "}
        <Button
        
          variant="contained"
          onClick={() => {
            setsort("asc");
          }}
          color="secondary"
          className="bg-red-400"
        >
          Sort Low to High
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            setsort("desc");
          }}
          color="secondary"
          className="bg-red-400"
        >
          sort high to low
        </Button>
      </div>
      <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-[90%] md:w-[80%]  gap-6 p-4 m-auto">
        {products.map((ele) => {
          return (
            <div
              key={ele.id}
              className="rounded-lg text-center bg-[#F6E7D8]
                 shadow-lg text-[#7b1fa2]"
            >
              <img src={ele.image} className="rounded-t-lg  w-full h-[240px]" />
              <div className="pdiv">
                <p
                  className="text-lg font-semibold hover:cursor-pointer hover:text-red-400"
                  onClick={() => {
                    navigate(`/product/${ele.id}`);
                  }}
                >
                  {ele.title.length > 20
                    ? ele.title.substr(1, 35) + "...."
                    : ele.title}
                </p>

                <div className="flex items-center justify-between w-[70%] m-auto mt-1">
                  <span className="">{ele.brand}</span>
                  <span className="">{ele.category}</span>
                </div>
                <div className="flex items-center justify-between w-[70%] m-auto mt-1">
                  <span className="">₹{ele.price}</span>
                </div>
                {/* <div className="flex justify-between gap-4 w-[80%] m-auto mt-1"> <Button variant="contained"
                    
                    onClick={() => {

                            // dispatch(deleteCart(user?.result?._id))
                            // dispatch(addCart({ userId: user.result._id, bookId: ele._id, navigate, to: "/checkout", toast }))
                        }}
                        color="secondary" className="bg-[#7b1fa2]" >
                        Buy now
                    </Button>

                        <Button variant="contained"
                     
                        onClick={() => {

                                // dispatch(addCart({ userId: user.result._id, bookId: ele._id, navigate, to: "/cart", toast }))
                            }}
                            color="secondary" className="bg-[#7b1fa2]" >
                            Add To cart
                        </Button>

                        </div>    */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-fit m-auto my-8">
        <PaginationComp total={numberOfPage} page={currentPage} />
      </div>
    </div>
  );
}
