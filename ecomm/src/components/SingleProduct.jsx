import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { addToCart } from '../Redux/Cart/Action'

export default function SingleProduct() {
    const [currentItem, setCurrentItem] = useState({})
    const { id } = useParams()
    const { products } = useSelector((state) => state.products)

    const navigate = useNavigate()
    const dispatch = useDispatch()
    useEffect(() => {
        
        let item = products.filter((ele) => ele.id == id)
        setCurrentItem(item[0])
       
    }, [])
if(!currentItem){
    navigate("/")
}
    return (
        <div className="  w-fit    shadow-2xl m-auto  my-10">

            <div>
                <img src={currentItem.image} className="h-[400px] w-[400px]" />
            </div>
            <div className="text-left w-[400px] mt-4 px-4 text-xl text-[#7b1fa2]">
                <p className="font-semibold">{currentItem.title}</p>
                <p >Brand - {currentItem.brand}</p>
                <p >Category - {currentItem.category}</p>

                <p>Price - ₹{currentItem.price}</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit qui eligendi repellendus porro aliquam nihil adipisci. Officiis quia eligendi porro, ea earum aperiam natus sapiente veritatis, unde quasi vel ipsa?</p>

                <Button variant="contained"
                    onClick={() => {
                        dispatch(addToCart( {product:currentItem} ))
                        navigate("/cart")
                    }}
                    color="secondary" className="bg-[#7b1fa2] my-4" >
                    Add To cart
                </Button>

            </div>

        </div>
    )
}
