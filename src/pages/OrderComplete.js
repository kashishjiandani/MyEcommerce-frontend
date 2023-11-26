import React from 'react'
import Breadcrumb from '../components/Cards/Breadcrumb'
import complete from "../images/complete.png";
import { useNavigate } from 'react-router-dom';

const OrderComplete = () => {
    const navigate = useNavigate();
  return (
    <>
 <Breadcrumb heading={"Shopping Cart"}/>

    {/* <!-- order complete wrapper --> */}
    <div class="max-w-3xl mx-auto px-4 pt-16 pb-24 text-center">
        <div class="mb-8">
            <img src={complete} class="w-16 inline-block"/>
        </div>
        <h2 class="text-gray-800 font-medium text-3xl mb-3">
            YOUR ORDER IS COMPLETED!
        </h2>
        <p class="text-gray-600 ">
            Thank you for your order! Your order is being processed and will be completed within 3-6 hours. You will
            receive an email confirmation when your order is completed.
        </p>
        <div class="mt-10">
            <button onClick={()=>navigate("/shop")} class="bg-primary border border-primary text-white px-6 py-3 font-medium rounded-md uppercase hover:bg-transparent
         hover:text-primary transition text-center">Continue shopping</button>
        </div>
    </div>
    {/* <!-- order complete wrapper end --> */}
    </>
  )
}

export default OrderComplete