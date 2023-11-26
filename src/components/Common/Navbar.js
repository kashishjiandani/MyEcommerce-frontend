import React from 'react'
import {BsList} from "react-icons/bs";
import { IoBedOutline } from "react-icons/io5";


const Navbar = () => {
  return (
    <nav class="bg-gray-800 hidden lg:block">
        <div class="container">
            <div class="flex">

                {/* <!-- all category --> */}
                <div class="px-8 py-4 bg-primary flex items-center cursor-pointer group relative">
                    <span class="text-white">
                       <BsList/>
                    </span>
                    <span class="capitalize ml-2 text-white">All categories</span>

                    <div class="absolute left-0 top-full w-full bg-white shadow-md py-3 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition duration-300 z-50 divide-y divide-gray-300 divide-dashed">
                        {/* <!-- single category --> */}
                        <a href="#" class="px-6 py-3 flex items-center hover:bg-gray-100 transition">
                            <IoBedOutline className='w-5 h-5 object-contain'/>
                            <span class="ml-6 text-gray-600 text-sm">Bedroom</span>
                        </a>
                        {/* <!-- single category end --> */}
                    </div>
                </div>
                {/* <!-- all category end --> */}

                {/* <!-- nav menu --> */}
                <div class="flex items-center justify-between flex-grow pl-12">
                    <div class="flex items-center space-x-6 text-base capitalize">
                        <a href="/" class="text-gray-200 hover:text-white transition">Home</a>
                        <a href="/shop" class="text-gray-200 hover:text-white transition">Shop</a>
                        <a href="#" class="text-gray-200 hover:text-white transition">About us</a>
                        <a href="#" class="text-gray-200 hover:text-white transition">Contact us</a>
                    </div>
                    <div class="flex items-center space-x-6 text-base capitalize">
                    <a href="/register" class="ml-auto justify-self-end text-gray-200 hover:text-white transition">
                        Register/Login
                    </a>
                    </div>
                </div>
                {/* <!-- nav menu end --> */}

            </div>
        </div>
    </nav>
  )
}

export default Navbar