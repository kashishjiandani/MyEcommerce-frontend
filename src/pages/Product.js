import React, { useEffect, useState } from 'react'
import ProductCard from '../components/Cards/ProductCard'
import Breadcrumb from '../components/Cards/Breadcrumb';
import { useParams } from 'react-router-dom';
import { BsFillStarFill, BsStar } from "react-icons/bs";
import { FaFacebookF,FaTwitter,FaInstagram, FaHeart } from "react-icons/fa";
import { IoBagCheck } from "react-icons/io5";
import sample from "../images/products/sample.jpg"
import { useNavigate } from 'react-router-dom';


const Product = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    // console.log(id);
    const [productDetails, setProductDetails] = useState([])
    const [quantity, setQuantity] = useState(1);

    const fetchProductDetails = async () => {
       
        const url = `http://localhost:8080/api/v1/product/${id}`;
      
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
      
          if (response.ok) {
            const data = await response.json();
            // console.log(data);
            setProductDetails(data?.product);
          } else {
            console.error("Error:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    
      useEffect(() => {
        fetchProductDetails();
    }, []);

    function calculateDiscount(productPrice){
        let discount = 5;
        let discountAmount = (productPrice*discount)/100
        let afterDiscountAmount = productPrice - discountAmount;
        return afterDiscountAmount;
      }
    
      function calculateRatingStars(productRating){
        const totalStars = 5; 
    
          const filledStars = Math.min(productRating, totalStars); // Number of filled stars
          const emptyStars = totalStars - filledStars; // Number of empty stars
      
          const stars = [];
      
          // Render filled stars
          for (let i = 0; i < filledStars; i++) {
            stars.push(<BsFillStarFill key={i} className='text-yellow-400' />);
          }
      
          // Render empty stars
          for (let i = 0; i < emptyStars; i++) {
            stars.push(<BsStar key={filledStars + i} className='text-gray-600' />);
          }
      
          return stars;
        
      }

      const handleDecrease = () => {
        // Ensure quantity doesn't go below 1
        setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
      };
    
      const handleIncrease = () => {
        // You can set a maximum quantity if needed
        setQuantity((prevQuantity) => prevQuantity + 1);
      };

      const authToken = localStorage.getItem("token");

      const addToCart = async ({ productDetails, quantity }) => {
        if (!productDetails) {
          console.error("Product details are not available yet.");
          return;
        }
      
        // Ensure productDetails.images is an array and not empty
        const images = productDetails.images;
        const image = Array.isArray(images) && images.length > 0 ? images[0] : null;
      
        if (!image) {
          console.error("Product image is missing or not in the expected format.");
          return;
        }
      
        const cartItems = [
          {
            name: productDetails.name,
            price: productDetails.price,
            image: image,
            productId: productDetails._id,
            quantity: quantity,
          },
        ];
      
        try {
          const res = await fetch(`http://localhost:8080/api/v1/cart/new`, {
            method: "POST",
            headers: {
              token: authToken,
              "Content-Type": "application/json", // Corrected header name
            },
            body: JSON.stringify({
              cartItems: cartItems,
            }),
          });
      
          const resData = await res.json();
          console.log(resData);
      
          if (resData.success) {
            alert("Product added to cart!");
          } else {
            console.error("Failed to add product to cart:", resData.error);
          }
        } catch (error) {
          console.error("Error adding product to cart:", error);
        }
      };
      
      
   
    
  return (
    <>
<Breadcrumb heading={"Shop"} productName={productDetails?.name}/>

    {/* <!-- product view --> */}
    <div class="container pt-4 pb-6 grid lg:grid-cols-2 gap-6">
        {/* <!-- product image --> */}
        <div>
            <div>
                <img id="main-img" src={productDetails?.images} class="w-full"/>
            </div>
            <div class="grid grid-cols-5 gap-4 mt-4">
                <div>
                    <img src={productDetails?.images} class="single-img w-full cursor-pointer border border-primary"/>
                </div>
                <div>
                    <img src={productDetails?.images} class="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={productDetails?.images} class="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={productDetails?.images} class="single-img w-full cursor-pointer border"/>
                </div>
                <div>
                    <img src={productDetails?.images} class="single-img w-full cursor-pointer border"/>
                </div>
            </div>
        </div>
        {/* <!-- product image end --> */}
        {/* <!-- product content --> */}
        <div>
            <h2 class="md:text-3xl text-2xl font-medium uppercase mb-2">{productDetails?.name}</h2>
            <div class="flex items-center mb-4">
            <div class="flex gap-1 text-sm">
                {calculateRatingStars(productDetails?.ratings)}
                </div>
                <div class="text-xs text-gray-500 ml-3">({productDetails?.numOfReviews} Reviews)</div>
            </div>
            <div class="space-y-2">
                <p class="text-gray-800 font-semibold space-x-2">
                    <span>Availability: </span>
                    <span class="text-green-600">In Stock</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Brand: </span>
                    <span class="text-gray-600">{productDetails?.brand}</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Category: </span>
                    <span class="text-gray-600">{productDetails?.subCategory}</span>
                </p>
                <p class="space-x-2">
                    <span class="text-gray-800 font-semibold">Product Id: </span>
                    <span class="text-gray-600">BE45VGRT</span>
                </p>
            </div>
            <div class="mt-4 flex items-baseline gap-3">
                <span class="text-primary font-semibold text-xl">₹ {calculateDiscount(productDetails?.price)}</span>
                <span class="text-gray-500 text-base line-through"></span>
                <span class="text-gray-500 text-base line-through">₹ {productDetails?.price}</span>
            </div>
            <p class="mt-4 text-gray-600">
            {productDetails?.description}
            </p>
            {/* <!-- size --> */}
            {/* <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Size</h3>
                <div class="flex items-center gap-2"> */}
                    {/* <!-- single size --> */}
                    {/* <div class="size-selector">
                        <input type="radio" name="size" class="hidden" id="size-xs"/>
                        <label for="size-xs"
                            class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                            {productDetails?.size}
                        </label>
                    </div> */}
                    {/* <!-- single size end --> */}
                {/* </div> */}
            {/* </div> */}
            {/* <!-- size end --> */}
            {/* <!-- color --> */}
            {/* <div class="mt-4">
                <h3 class="text-base text-gray-800 mb-1">Color</h3>
                <div class="flex items-center gap-2"> */}
                    {/* <!-- single color --> */}
                    {/* <div class="color-selector">
                        <input type="radio" name="color" class="hidden" id="color-red"/>
                        <label for="color-red" 
                            class="text-xs bg-black border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                        </label>
                    </div> */}
                    {/* <!-- single color end --> */}
                {/* </div> */}
            {/* </div> */}
            {/* <!-- color end --> */}
           
      {/* Quantity */}
      <div class="mt-4">
        <h3 class="text-base text-gray-800 mb-1">Quantity</h3>
        <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300 w-max">
          <div
            onClick={handleDecrease}
            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            -
          </div>
          <div class="h-8 w-10 flex items-center justify-center">{quantity}</div>
          <div
            onClick={handleIncrease}
            class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none"
          >
            +
          </div>
        </div>
      </div>
      {/* Quantity end */}
            {/* <!-- add to cart button --> */}
            <div class="flex gap-3 border-b border-gray-200 pb-5 mt-6">
                <button onClick={()=>{addToCart({productDetails,quantity})}} class="flex items-center justify-center bg-primary border border-primary text-white px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm ">
                    <span class="mr-2"><IoBagCheck/></span> Add to cart
                </button>
                <button href="#" class="flex items-center justify-center border border-gray-300 text-gray-600 px-8 py-2 font-medium rounded uppercase 
                    hover:bg-transparent hover:text-primary transition text-sm">
                    <span class="mr-2"><FaHeart /></span> Wishlist
                </button>
            </div>
            {/* <!-- add to cart button end --> */}
            {/* <!-- product share icons --> */}
            <div class="flex space-x-3 mt-4">
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <FaFacebookF/>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <FaTwitter/>
                </a>
                <a href="#"
                    class="text-gray-400 hover:text-gray-500 h-8 w-8 rounded-full border border-gray-300 flex items-center justify-center">
                    <FaInstagram/>
                </a>
            </div>
            {/* <!-- product share icons end --> */}
        </div>
        {/* <!-- product content end --> */}
    </div>
    {/* <!-- product view end --> */}

    {/* <!-- product details and review --> */}
    <div class="container pb-16">
        {/* <!-- detail buttons --> */}
        <h3 class="border-b border-gray-200 font-roboto text-gray-800 pb-3 font-medium">
            Product Details
        </h3>
        {/* <!-- details button end --> */}

        {/* <!-- details content --> */}
        <div class="lg:w-4/5 xl:w-3/5 pt-6">
            {/* <div class="space-y-3 text-gray-600">
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Incredible graphics performanceMacBook Air can take on more graphics-intensive projects than
                    ever. For the first time, content creators can edit and seamlessly play back multiple streams of
                    full‑quality 4K video without dropping a frame.
                </p>
                <p>
                    Apps on MacBook Air can use machine learning (ML) to automatically retouch photos like a pro,
                    make smart tools such as magic wands and audio filters more accurate at auto‑detection, and so
                    much more. That’s not just brain power — that’s the power of a full stack of ML technologies.
                </p>
            </div> */}
            {/* <!-- details table --> */}
            <table class="table-auto border-collapse w-full text-left text-gray-600 text-sm mt-6">
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Color</th>
                    <td class="py-2 px-4 border border-gray-300">{productDetails?.color}</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Size</th>
                    <td class="py-2 px-4 border border-gray-300">{productDetails?.size}</td>
                </tr>
                <tr>
                    <th class="py-2 px-4 border border-gray-300 w-40 font-medium">Brand</th>
                    <td class="py-2 px-4 border border-gray-300">{productDetails?.brand}</td>
                </tr>
            </table>
            {/* <!-- details table --> */}
        </div>
        {/* <!-- details content end --> */}
    </div>
    {/* <!-- product details and review end --> */}

    {/* <!-- related products --> */}
    <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">related products</h2>
        {/* <!-- product wrapper --> */}
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {/* <ProductCard productImg={product1} productName={"Guyer chair"} productPrice={45.00}/> */}
        </div>
        {/* <!-- product wrapper end --> */}
    </div>
    {/* <!-- related products end --> */}
    </>
  )
}

export default Product