import React from 'react'
import { useNavigate } from 'react-router-dom';
import { BsFillHeartFill, BsSearch, BsFillStarFill, BsStar } from "react-icons/bs";

const ProductCard = ({productId,productImg,productName,productPrice,numOfReviews,productRating}) => {

  const authToken = localStorage.getItem("token");

  const navigate = useNavigate();

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

  const addToCart = async ({ productId,productName,productPrice,productImg }) => {
  
    const cartItems = [
      {
        name: productName,
        price: productPrice,
        image: productImg,
        productId: productId,
        quantity: 1,
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
    <div class="group rounded bg-white shadow overflow-hidden">
            {/* <!-- product image --> */}
            <div class="relative">
              <img src={productImg} class="w-full h-[200px] " />
              <div class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition">
                <button onClick={() => navigate(`/product/${productId}`)}
                  // href=`/product/:id`
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <BsSearch />
                </button>
                <a
                  href="#"
                  class="text-white text-lg w-9 h-9 rounded-full bg-primary hover:bg-gray-800 transition flex items-center justify-center"
                >
                  <BsFillHeartFill />
                </a>
              </div>
            </div>
            {/* <!-- product image end --> */}
            {/* <!-- product content --> */}
            <div class="pt-4 pb-3 px-4">
              <a href="view.html">
                <h4 class="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                  {productName}
                </h4>
              </a>
              <div class="flex items-baseline mb-1 space-x-2">
                <p class="text-xl text-primary font-roboto font-semibold">
                ₹{calculateDiscount(productPrice)}
                </p>
                <p class="text-sm text-gray-400 font-roboto line-through">
                ₹ {productPrice}
                </p>
              </div>
              <div class="flex items-center">
                <div class="flex gap-1 text-sm">
                {calculateRatingStars(productRating)}
                </div>
                <div class="text-xs text-gray-500 ml-3">({numOfReviews})</div>
              </div>
            </div>
            {/* <!-- product content end --> */}
            {/* <!-- product button --> */}
            <button
              onClick={()=>{addToCart({productId,productName,productPrice,productImg })}}
              class="block w-full py-1 text-center text-white bg-primary border border-primary rounded-b hover:bg-transparent hover:text-primary transition"
            >
              Add to Cart
            </button>
            {/* <!-- product button end --> */}
          </div>
  )
}

export default ProductCard