import React from 'react'
import logo from '../../images/logo.png'
import { BsFillHeartFill,BsBagFill, BsSearch, BsFillPersonFill} from "react-icons/bs";



const Header = () => {
  return (
    <header class="w-full py-4 shadow-sm bg-pink-100 lg:bg-white">
    <div class="container flex items-center justify-between">
        {/* <!-- logo --> */}
        <a href="/" class="block w-32">
            <img src={logo} alt="logo" class="w-full"/>
        </a>
        {/* <!-- logo end --> */}

        {/* <!-- searchbar --> */}
        <div class="w-full xl:max-w-xl lg:max-w-lg lg:flex relative hidden">
            <span class="absolute left-4 top-3 text-lg text-gray-400">
                <BsSearch/>
            </span>
            <input type="text"
                class="pl-12 w-full border border-r-0 border-primary py-3 px-3 rounded-l-md focus:ring-primary focus:border-primary"
                placeholder="search"/>
            <button type="submit"
                class="bg-primary border border-primary text-white px-8 font-medium rounded-r-md hover:bg-transparent hover:text-primary transition">
                Search
            </button>
        </div>
        {/* <!-- searchbar end --> */}

        {/* <!-- navicons --> */}
        <div class="space-x-4 flex items-center">
            <a href="/wishlist" class="block text-center text-gray-700 hover:text-primary transition relative">
                {/* <span
                    class="absolute -right-0 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">5</span> */}
                <div class="text-2xl">
                    <BsFillHeartFill/>
                </div>
                <div class="text-xs leading-3">Wish List</div>
            </a>
            <a href="/cart"
                class="lg:block text-center text-gray-700 hover:text-primary transition hidden relative">
                {/* <span
                    class="absolute -right-3 -top-1 w-5 h-5 rounded-full flex items-center justify-center bg-primary text-white text-xs">3</span> */}
                <div class="text-2xl">
                   <BsBagFill/>
                </div>
                <div class="text-xs leading-3">Cart</div>
            </a>
            <a href="/profile" class="block text-center text-gray-700 hover:text-primary transition">
                <div class="text-2xl">
                    <BsFillPersonFill/>
                </div>
                <div class="text-xs leading-3">Profile</div>
            </a>
        </div>
        {/* <!-- navicons end --> */}

    </div>
</header>
  )
}

export default Header