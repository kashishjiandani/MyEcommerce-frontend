import React, { useEffect, useState } from "react";
import banner from "../images/banner.jpg";
import offer from "../images/offer.jpg";
import hours from "../images/hours.svg";
import money from "../images/money.svg";
import van from "../images/van.svg";
import bedroom from "../images/categories/bedroom.jpg";
import bathroom from "../images/categories/bathroom.jpg";
import diningroom from "../images/categories/diningroom.jpg";
import kitchen from "../images/categories/kitchen.jpg";
import livingroom from "../images/categories/livingroom.jpg";
import office from "../images/categories/office.jpg";
// import { Ri24HoursFill } from "react-icons/ri";
// import { GiReceiveMoney,GiTruck } from "react-icons/gi";
import FeaturesCard from "../components/Cards/FeaturesCard";
import CategoryCard from "../components/Cards/CategoryCard";
import ProductCard from "../components/Cards/ProductCard";

const Home = () => {

  const [topProducts, setTopProducts] = useState([])
  const [recomendProducts, setRecomendProducts] = useState([])

  const getProducts = async () => {
     
      const url = "http://localhost:8080/api/v1/products";
    
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
          const firstFourProducts = data?.products.slice(0, 4);
          setTopProducts(firstFourProducts);
          const lastFourProducts = data?.products.slice(5, 8);
          setRecomendProducts(lastFourProducts);
        } else {
          console.error("Error:", response.status, response.statusText);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

useEffect(() => {
  getProducts();
}, [])

  useEffect(() => {
    const menuBar = document.querySelector("#menuBar");
    const mobileMenu = document.querySelector("#mobileMenu");
    const closeMenu = document.querySelector("#closeMenu");

    menuBar.addEventListener("click", function () {
      mobileMenu.classList.remove("hidden");
    });

    closeMenu.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
    });

    // Cleanup: remove event listeners when the component unmounts
    return () => {
      menuBar.removeEventListener("click", function () {
        mobileMenu.classList.remove("hidden");
      });
      closeMenu.removeEventListener("click", function () {
        mobileMenu.classList.add("hidden");
      });
    };
  }, []);

  return (
    <div className="w-full flex flex-col items-stretch justify-items-stretch">
      {/* <!-- banner --> */}
      <div
        class="bg-cover bg-no-repeat bg-center py-36 relative"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div class="container">
          {/* <!-- banner content --> */}
          <h1 class="xl:text-6xl md:text-5xl text-4xl text-gray-800 font-medium mb-4">
            Best Collection For <br class="hidden sm:block" /> Home Decoration
          </h1>
          <p class="text-base text-gray-600 leading-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa{" "}
            <br class="hidden sm:block" />
            assumenda aliquid inventore nihil laboriosam odio
          </p>
          {/* <!-- banner button --> */}
          <div class="mt-12">
            <a
              href="shop.html"
              class="bg-primary border border-primary text-white px-8 py-3 font-medium rounded-md uppercase hover:bg-transparent
               hover:text-primary transition"
            >
              Shop now
            </a>
          </div>
          {/* <!-- banner button end --> */}
          {/* <!-- banner content end --> */}
        </div>
      </div>
      {/* <!-- banner end --> */}

      {/* <!-- features --> */}
      <div class="container py-16">
        <div class="lg:w-10/12 grid md:grid-cols-3 gap-3 lg:gap-6 mx-auto justify-center">
          {/* <FeaturesCard logo={<GiTruck/>} heading={"Free shipping"} description={"Order over $200"}/> */}
          <FeaturesCard logo={van} heading={"Free shipping"} description={"Order over $200"}/>
          {/* <FeaturesCard logo={<GiReceiveMoney/>} heading={"Money returns"} description={" 30 Days money return"}/> */}
          <FeaturesCard logo={money} heading={"Money returns"} description={" 30 Days money return"}/>
          {/* <FeaturesCard logo={<Ri24HoursFill />} heading={"24/7 Support"} description={"Customer support"}/> */}
          <FeaturesCard logo={hours} heading={"24/7 Support"} description={"Customer support"}/>
        </div>
      </div>
      {/* <!-- features end --> */}

      {/* <!-- categories --> */}
      <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          Shop by category
        </h2>
        <div class="grid lg:grid-cols-3 sm:grid-cols-2 gap-3">
          <CategoryCard picture={bedroom} name={"Bedroom"}/>
          <CategoryCard picture={bathroom} name={"Bathroom"}/>
          <CategoryCard picture={livingroom} name={"Living room"}/>
          <CategoryCard picture={kitchen} name={"Kitchen"}/>
          <CategoryCard picture={office} name={"Office"}/>
          <CategoryCard picture={diningroom} name={"Dining"}/>
        </div>
      </div>
      {/* <!-- categories end --> */}

      {/* <!-- top new arrival --> */}
      <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          Top new arrivals
        </h2>
        {/* <!-- product wrapper --> */}
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
      
        {topProducts?.length>0 && topProducts?.map((e)=>(
               <ProductCard productId = {e?._id} productImg={e?.images[0]} productName={e?.name} productPrice={e?.price} numOfReviews={e?.numOfReviews} productRating={e?.ratings}/>
            ))}

        </div>
        {/* <!-- product wrapper end --> */}
      </div>
      {/* <!-- top new arrival end --> */}

      {/* <!-- ad section --> */}
      <div class="container pb-16">
        <a href="#">
          <img src={offer} class="w-full" />
        </a>
      </div>
      {/* <!-- ad section end --> */}

      {/* <!-- recomended for you --> */}
      <div class="container pb-16">
        <h2 class="text-2xl md:text-3xl font-medium text-gray-800 uppercase mb-6">
          Recomended for you
        </h2>
        {/* <!-- product wrapper --> */}
        <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-6">
        {recomendProducts?.length>0 && recomendProducts?.map((e)=>(
               <ProductCard productId = {e?._id} productImg={e?.images[0]} productName={e?.name} productPrice={e?.price} numOfReviews={e?.numOfReviews} productRating={e?.ratings}/>
            ))}
        </div>
        {/* <!-- product wrapper end --> */}
      </div>
      {/* <!-- recomended for you end --> */}

    </div>
  );
};

export default Home;
