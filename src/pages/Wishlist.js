import React from 'react'
import Breadcrumb from '../components/Cards/Breadcrumb'

const Wishlist = () => {
  return (
    <>
      <Breadcrumb heading={"My Account"}/>

    {/* <!-- account wrapper --> */}
    <div class="container lg:grid grid-cols-12 items-start gap-6 pt-4 pb-16">
        {/* <!-- sidebar --> */}
        <div class="col-span-3">
            {/* <!-- account profile --> */}
            <div class="px-4 py-3 shadow flex items-center gap-4">
                <div class="flex-shrink-0">
                    <img src="images/avatar.png" class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"/>
                </div>
                <div>
                    <p class="text-gray-600">Hello,</p>
                    <h4 class="text-gray-800 capitalize font-medium">Russell Ahmed</h4>
                </div>
            </div>
            {/* <!-- account profile end --> */}

            {/* <!-- profile links --> */}
            <div class="mt-6 bg-white shadow rounded p-4 divide-y divide-gray-200 space-y-4 text-gray-600">
                {/* <!-- single link --> */}
                <div class="space-y-1 pl-8">
                    <a href="account.html"
                        class="relative text-base font-medium capitalize hover:text-primary transition block">
                        Manage account
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-address-card"></i>
                        </span>
                    </a>
                    <a href="profile-info.html" class="hover:text-primary transition capitalize block">Profile
                        information</a>
                    <a href="manage-address.html" class="hover:text-primary transition capitalize block">Manage
                        address</a>
                    <a href="change-password.html" class="hover:text-primary transition capitalize block">change
                        password</a>
                </div>
                {/* <!-- single link end --> */}
                {/* <!-- single link --> */}
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#"
                        class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                        My order history
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fas fa-gift"></i>
                        </span>
                    </a>
                    <a href="#" class="hover:text-primary transition block capitalize">my returns</a>
                    <a href="#" class="hover:text-primary transition block capitalize">my cancellations</a>
                    <a href="#" class="hover:text-primary transition block capitalize">my reviews</a>
                </div>
                {/* <!-- single link end --> */}
                {/* <!-- single link --> */}
                <div class="space-y-1 pl-8 pt-4">
                    <a href="#"
                        class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                        Payment methods
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-credit-card"></i>
                        </span>
                    </a>
                    <a href="#" class="hover:text-primary transition block capitalize">Voucher</a>
                </div>
                {/* <!-- single link end --> */}
                {/* <!-- single link --> */}
                <div class="pl-8 pt-4">
                    <a href="wishlist.html"
                        class="relative medium capitalize font-medium hover:text-primary transition block text-primary">
                        my wishlist
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="far fa-heart"></i>
                        </span>
                    </a>
                </div>
                {/* <!-- single link end --> */}
                {/* <!-- single link --> */}
                <div class="pl-8 pt-4">
                    <a href="#"
                        class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
                        logout
                        <span class="absolute -left-8 top-0 text-base">
                            <i class="fas fa-sign-out-alt"></i>
                        </span>
                    </a>
                </div>
                {/* <!-- single link end --> */}
            </div>
            {/* <!-- profile links end --> */}
        </div>
        {/* <!-- sidebar end --> */}

        {/* <!-- account content --> */}
        <div class="col-span-9 mt-6 lg:mt-0 space-y-4">
            {/* <!-- single wishlist --> */}
            <div
                class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                {/* <!-- cart image --> */}
                <div class="w-28 flex-shrink-0">
                    <img src="images/products/product9.jpg"  class="w-full"/>
                </div>
                {/* <!-- cart image end --> */}
                {/* <!-- cart content --> */}
                <div class="md:w-1/3 w-full">
                    <h2 class="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <p class="text-gray-500 text-sm">Availability: <span class="text-green-600">In Stock</span></p>
                </div>
                {/* <!-- cart content end --> */}
                <div class="">
                    <p class="text-primary text-lg font-semibold">$320.00</p>
                </div>
                <a href="#"
                    class="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                    Add to cart
                </a>
                <div class="text-gray-600 hover:text-primary cursor-pointer">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            {/* <!-- single wishlist end --> */}
            {/* <!-- single wishlist --> */}
            <div
                class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                {/* <!-- cart image --> */}
                <div class="w-28 flex-shrink-0">
                    <img src="images/products/product9.jpg"  class="w-full"/>
                </div>
                {/* <!-- cart image end --> */}
                {/* <!-- cart content --> */}
                <div class="md:w-1/3 w-full">
                    <h2 class="text-gray-800 mb-1 xl:text-xl textl-lg font-medium uppercase">
                        Italian L Shape Sofa
                    </h2>
                    <p class="text-gray-500 text-sm">Availability: <span class="text-red-600">Out of Stock</span></p>
                </div>
                {/* <!-- cart content end --> */}
                <div class="">
                    <p class="text-primary text-lg font-semibold">$320.00</p>
                </div>
                <a href="#"
                    class="ml-auto md:ml-0 block px-6 py-2 text-center text-sm text-white bg-primary border border-primary rounded 
                    uppercase font-roboto font-medium cursor-not-allowed bg-opacity-80">
                    Add to cart
                </a>
                <div class="text-gray-600 hover:text-primary cursor-pointer">
                    <i class="fas fa-trash"></i>
                </div>
            </div>
            {/* <!-- single wishlist end --> */}
        </div>
        {/* <!-- account content end --> */}
    </div>
    {/* <!-- account wrapper end --> */}
    </>
  )
}

export default Wishlist