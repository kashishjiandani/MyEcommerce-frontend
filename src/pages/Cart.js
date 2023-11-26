import React, { useContext, useEffect, useState } from 'react'
import Breadcrumb from '../components/Cards/Breadcrumb'
import MainContext from '../Context/MainContext';
import CartCard from '../components/Cards/CartCard';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');
//   console.log(token);
    const [cart ,setCart ]= useState([])

    const getCart = async () => {
       
        const url = `http://localhost:8080/api/v1/cart/${userId}`;
      
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "token":token
            }
          });
      
          if (response.ok) {
            const data = await response.json();
            // console.log(data.cart.cartItems);
            setCart(data?.cart?.cartItems);
          } else {
            console.error("Error:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };

      const calculateTotal = () => {
        return cart.reduce((total, e) => total + e.price * e.quantity, 0);
    };
    
    

useEffect(() => {
    getCart();
}, [])

  return (
    <>
  <Breadcrumb heading={"Shopping Cart"}/>

    {/* <!-- cart wrapper --> */}
    <div class="container lg:grid grid-cols-12 gap-6 items-start pb-16 pt-4">
        {/* <!-- product cart --> */}
        <div class="xl:col-span-9 lg:col-span-8">
            {/* <!-- cart title --> */}
            <div class="bg-gray-200 py-2 pl-12 pr-20 xl:pr-28 mb-4 hidden md:flex">
                <p class="text-gray-600 text-center">Product</p>
                <p class="text-gray-600 text-center ml-auto mr-16 xl:mr-24">Quantity</p>
                <p class="text-gray-600 text-center">Total</p>
            </div>
            {/* <!-- cart title end --> */}

            {/* <!-- shipping carts --> */}
            <div class="space-y-4">
                {/* <!-- single cart --> */}
            {cart?.length>0 && cart?.map((e,index)=>(
               <CartCard key={index} productName={e?.name} productPrice={e?.price} productQuantity={e?.quantity} productImg={e?.image}/>
            ))}
                {/* <!-- single cart end --> */}
                
            </div>
            {/* <!-- shipping carts end --> */}
        </div>
        {/* <!-- product cart end --> */}
        {/* <!-- order summary --> */}
        <div class="xl:col-span-3 lg:col-span-4 border border-gray-200 px-4 py-4 rounded mt-6 lg:mt-0">
            <h4 class="text-gray-800 text-lg mb-4 font-medium uppercase">ORDER SUMMARY</h4>
            <div class="space-y-1 text-gray-600 pb-3 border-b border-gray-200">
                <div class="flex justify-between font-medium">
                    <p>Subtotal</p>
                    <p>₹ {calculateTotal().toLocaleString('en-IN')}</p>
                </div>
                <div class="flex justify-between">
                    <p>Delivery</p>
                    <p>₹ 100</p>
                </div>
                <div class="flex justify-between">
                    <p>Tax</p>
                    <p>₹120</p>
                </div>
            </div>
            <div class="flex justify-between my-3 text-gray-800 font-semibold uppercase">
                <h4>Total</h4>
                <h4>₹{(calculateTotal()+100+120).toLocaleString('en-IN')}</h4>
            </div>

            {/* <!-- searchbar --> */}
            <div class="flex mb-5">
                <input type="text"
                    class="pl-4 w-full border border-r-0 border-primary py-2 px-3 rounded-l-md focus:ring-primary focus:border-primary text-sm"
                    placeholder="Coupon"/>
                <button type="submit"
                    class="bg-primary border border-primary text-white px-5 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition text-sm font-roboto">
                    Apply
                </button>
            </div>
            {/* <!-- searchbar end --> */}

            {/* <!-- checkout --> */}
            <button onClick={()=>{navigate("/checkout")}} class="bg-primary border border-primary text-white px-4 py-3 font-medium rounded-md uppercase hover:bg-transparent
             hover:text-primary transition text-sm w-full block text-center">
                Proceed to checkout
            </button>
            {/* <!-- checkout end --> */}
        </div>
        {/* <!-- order summary end --> */}
    </div>
    {/* <!-- cart wrapper end --> */}
    </>
  )
}

export default Cart