import React, { useEffect, useState } from 'react'
import Breadcrumb from '../components/Cards/Breadcrumb'
import ProductCard from '../components/Cards/ProductCard';
import { FaListUl } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";


const Shop = () => {

    const [products, setProducts] = useState([])
    const [filters, setFilters] = useState({
        category: [],
        subCategory: [],
        brand : [],
        size : [],
        color : []
    })

    const getProducts = async () => {
       
        const url = `http://localhost:8080/api/v1/products?category=${filters.category}&subCategory=${filters.subCategory}&brand=${filters.brand}&size=${filters.size}&color=${filters.color}`;
      
        try {
          const response = await fetch(url, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            }
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log(data);
            setProducts(data?.products);
          } else {
            console.error("Error:", response.status, response.statusText);
          }
        } catch (error) {
          console.error("Error:", error);
        }
      };
    
    

useEffect(() => {
    getProducts();
}, [filters])

  return (
    <>
 <Breadcrumb heading={"Shop"}/>

    {/* <!-- shop wrapper --> */}
    <div class="container grid lg:grid-cols-4 gap-6 pt-4 pb-16 items-start relative">
        {/* <!-- sidebar --> */}
        <div
            class="col-span-1 bg-white px-4 pt-4 pb-6 shadow rounded overflow-hidden absolute lg:static left-4 top-16 z-10 w-72 lg:w-full lg:block">
            <div class="divide-gray-200 divide-y space-y-5 relative">
                {/* <!-- category filter --> */}
                <div class="relative">
                    <div
                        class="lg:hidden text-gray-400 hover:text-primary text-lg absolute right-0 top-0 cursor-pointer">
                        <i class="fas fa-times"></i>
                    </div>
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Categories</h3>
                    <div class="space-y-2">
                        {/* <!-- single category --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Bedroom"
                                value={"Bedroom"}
                                onChange={(e) =>
                                  setFilters({
                                    ...filters,
                                    category: e.target.value,
                                  })
                                }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Bedroom" class="text-gray-600 ml-3 cursor-pointer">Bedroom</label>
                            <div class="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Sofa"
                            value={"Bathroom"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                category: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Sofa" class="text-gray-600 ml-3 cursor-pointer">Bathroom</label>
                            <div class="ml-auto text-gray-600 text-sm">(05)</div>
                        </div>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Office"
                            value={"Office"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                category: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Office" class="text-gray-600 ml-3 cursor-pointer">Office</label>
                            <div class="ml-auto text-gray-600 text-sm">(09)</div>
                        </div>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Kitchen"
                            value={"Kitchen"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                category: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Kitchen" class="text-gray-600 ml-3 cursor-pointer">Kitchen</label>
                            <div class="ml-auto text-gray-600 text-sm">(19)</div>
                        </div>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="DiningRoom"
                            value={"DiningRoom"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                category: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="DiningRoom" class="text-gray-600 ml-3 cursor-pointer">Dining</label>
                            <div class="ml-auto text-gray-600 text-sm">(19)</div>
                        </div>
                        {/* <!-- single category end --> */}
                        {/* <!-- single category --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="LivingRoom"
                            value={"LivingRoom"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                category: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="LivingRoom" class="text-gray-600 ml-3 cursor-pointer">Living Room</label>
                            <div class="ml-auto text-gray-600 text-sm">(19)</div>
                        </div>
                        {/* <!-- single category end --> */}
                    </div>
                </div>
                {/* <!-- category filter end --> */}
                {/* <!-- brand filter --> */}
                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Brands</h3>
                    <div class="space-y-2">
                        {/* <!-- single brand name --> */}
                        <div class="flex items-center">
                            <input type="checkbox"
                            value={"LuxoLiving"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                brand: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label class="text-gray-600 ml-3 cursor-pointer">LuxoLiving</label>
                            <div class="ml-auto text-gray-600 text-sm">(15)</div>
                        </div>
                        {/* <!-- single brand name end --> */}
                        {/* <!-- single brand name --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Karl"
                            value={"CozyCraze"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                brand: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Karl" class="text-gray-600 ml-3 cursor-pointer">CozyCraze</label>
                            <div class="ml-auto text-gray-600 text-sm">(18)</div>
                        </div>
                        {/* <!-- single brand name end --> */}
                        {/* <!-- single brand name --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Maxing"
                            value={"ZenZones"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                brand: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Maxing" class="text-gray-600 ml-3 cursor-pointer">ZenZones</label>
                            <div class="ml-auto text-gray-600 text-sm">(09)</div>
                        </div>
                        {/* <!-- single brand name end --> */}
                        {/* <!-- single brand name --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Ernest"
                            value={"LivingRoom"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                category: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Ernest" class="text-gray-600 ml-3 cursor-pointer">Ernest</label>
                            <div class="ml-auto text-gray-600 text-sm">(12)</div>
                        </div>
                        {/* <!-- single brand name end --> */}
                        {/* <!-- single brand name --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Ernest"
                            value={"Viva"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                brand: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Ernest" class="text-gray-600 ml-3 cursor-pointer">Viva</label>
                            <div class="ml-auto text-gray-600 text-sm">(12)</div>
                        </div>
                        {/* <!-- single brand name end --> */}
                        {/* <!-- single brand name --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Ernest"
                            value={"Elega"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                brand: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Ernest" class="text-gray-600 ml-3 cursor-pointer">Elega</label>
                            <div class="ml-auto text-gray-600 text-sm">(12)</div>
                        </div>
                        {/* <!-- single brand name end --> */}
                        {/* <!-- single brand name --> */}
                        <div class="flex items-center">
                            <input type="checkbox" id="Ernest"
                            value={"Plushify"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                brand: e.target.value,
                              })
                            }
                                class="text-primary focus:ring-0 rounded-sm cursor-pointer"/>
                            <label for="Ernest" class="text-gray-600 ml-3 cursor-pointer">Plushify</label>
                            <div class="ml-auto text-gray-600 text-sm">(12)</div>
                        </div>
                        {/* <!-- single brand name end --> */}
                    </div>
                </div>
                {/* <!-- brand filter end --> */}
                {/* <!-- price filter --> */}
                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">Price</h3>
                    <div class="mt-4 flex items-center">
                        <input type="text"
                            class="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                            placeholder="min"/>
                        <span class="mx-3 text-gray-500">-</span>
                        <input type="text"
                            class="w-full border-gray-300 focus:ring-0 focus:border-primary px-3 py-1 text-gray-600 text-sm shadow-sm rounded"
                            placeholder="mix"/>
                    </div>
                </div>
                {/* <!-- price filter end --> */}
                {/* <!-- size filter --> */}
                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">size</h3>
                    <div class="flex items-center gap-2">
                        {/* <!-- single size --> */}
                        <div class="size-selector">
                            <input type="radio" 
                            value={"XS"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                size: e.target.value,
                              })
                            }
                            name="size" class="hidden" id="size-xs"/>
                            <label for="size-xs"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                XS
                            </label>
                        </div>
                        {/* <!-- single size end --> */}
                        {/* <!-- single size --> */}
                        <div class="size-selector">
                            <input type="radio"
                                 value={"S"}
                                 onChange={(e) =>
                                   setFilters({
                                     ...filters,
                                     size: e.target.value,
                                   })
                                 } name="size" class="hidden" id="size-s"/>
                            <label for="size-s"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                S
                            </label>
                        </div>
                        {/* <!-- single size end --> */}
                        {/* <!-- single size --> */}
                        <div class="size-selector">
                            <input type="radio"
                                 value={"M"}
                                 onChange={(e) =>
                                   setFilters({
                                     ...filters,
                                     size: e.target.value,
                                   })
                                 } name="size" class="hidden" id="size-m" checked/>
                            <label for="size-m"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                M
                            </label>
                        </div>
                        {/* <!-- single size end --> */}
                        {/* <!-- single size --> */}
                        <div class="size-selector">
                            <input type="radio" 
                                 value={"L"}
                                 onChange={(e) =>
                                   setFilters({
                                     ...filters,
                                     size: e.target.value,
                                   })
                                 }name="size" class="hidden" id="size-l"/>
                            <label for="size-l"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                L
                            </label>
                        </div>
                        {/* <!-- single size end --> */}
                        {/* <!-- single size --> */}
                        <div class="size-selector">
                            <input type="radio" 
                                 value={"XL"}
                                 onChange={(e) =>
                                   setFilters({
                                     ...filters,
                                     size: e.target.value,
                                   })
                                 }name="size" class="hidden" id="size-xl"/>
                            <label for="size-xl"
                                class="text-xs border border-gray-200 rounded-sm h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600">
                                XL
                            </label>
                        </div>
                        {/* <!-- single size end --> */}
                    </div>
                </div>
                {/* <!-- size filter end --> */}
                {/* <!-- color filter --> */}
                <div class="pt-4">
                    <h3 class="text-xl text-gray-800 mb-3 uppercase font-medium">color</h3>
                    <div class="flex items-center gap-2">
                        {/* <!-- single color --> */}
                        <div class="color-selector">
                            <input type="radio" 
                                 value={"Brown"}
                                 onChange={(e) =>
                                   setFilters({
                                     ...filters,
                                     color: e.target.value,
                                   })
                                 }
                                 name="color" class="hidden" id="color-brown"/>
                            <label for="color-brown" 
                                class=" bg-amber-950 text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                            </label>
                        </div>
                        {/* <!-- single color end --> */}
                        {/* <!-- single color --> */}
                        <div class="color-selector">
                            <input type="radio" 
                            value={"White"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                color: e.target.value,
                              })
                            }
                            name="color" class="hidden" id="color-white"/>
                            <label for="color-white" 
                                class="bg-white text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                            </label>
                        </div>
                        {/* <!-- single color end --> */}
                        {/* <!-- single color --> */}
                        <div class="color-selector">
                            <input type="radio" 
                            value={"Black"}
                            onChange={(e) =>
                              setFilters({
                                ...filters,
                                color: e.target.value,
                              })
                            }
                            name="color" class="hidden" id="color-black"/>
                            <label for="color-black" 
                                class="bg-black text-xs border border-gray-200 rounded-sm h-5 w-5 flex items-center justify-center cursor-pointer shadow-sm">
                            </label>
                        </div>
                        {/* <!-- single color end --> */}
                    </div>
                </div>
                {/* <!-- color filter end --> */}
            </div>
        </div>
        {/* <!-- sidebar end --> */}

        {/* <!-- products --> */}
        <div class="col-span-3">
            {/* <!-- sorting --> */}
            <div class="mb-4 flex items-center">
                <select
                    class="w-44 text-sm text-gray-600 px-4 py-3 border-gray-300 shadow-sm rounded focus:ring-primary focus:border-primary">
                    <option>Default sorting</option>
                    <option>Price low-high</option>
                    <option>Price high-low</option>
                    <option>Latest product</option>
                </select>
            </div>
            {/* <!-- sorting end --> */}
            {/* <!-- product wrapper --> */}
            <div class="grid lg:grid-cols-2 xl:grid-cols-3 sm:grid-cols-2 gap-6">
                {/* <!-- single product --> */}
            {products?.length>0 && products?.map((e)=>(
               <ProductCard productId = {e?._id} productImg={e?.images[0]} productName={e?.name} productPrice={e?.price} numOfReviews={e?.numOfReviews} productRating={e?.ratings}/>
            ))}
                {/* <!-- single product end --> */}
              
            </div>
            {/* <!-- product wrapper end --> */}
        </div>
        {/* <!-- products end --> */}
    </div>
    {/* <!-- shop wrapper end --> */}
    </>
  )
}

export default Shop