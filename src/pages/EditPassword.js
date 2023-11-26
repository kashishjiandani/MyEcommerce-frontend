import React from 'react'
import Breadcrumb from '../components/Cards/Breadcrumb'

const EditPassword = () => {
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
                    <img src="images/avatar.png"
                        class="rounded-full w-14 h-14 p-1 border border-gray-200 object-cover"/>
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
                    <a href="profile-info.html" class="hover:text-primary transition capitalize block">Profile information</a>
                    <a href="manage-address.html" class="hover:text-primary transition capitalize block">Manage address</a>
                    <a href="change-password.html" class="hover:text-primary transition capitalize block text-primary">change password</a>
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
                   <a href="wishlist.html" class="relative medium capitalize text-gray-800 font-medium hover:text-primary transition block">
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
        <div class="col-span-9 shadow rounded px-6 pt-5 pb-7 mt-6 lg:mt-0">
            <form action="">
                <h3 class="text-lg font-medium capitalize mb-4">
                    Change password
                </h3>
                <div class="space-y-4 max-w-sm">
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Current Password
                        </label>
                        <div class="relative">
                            <span class="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                                <i class="far fa-eye-slash"></i>
                            </span>
                            <input type="text" class="input-box" placeholder="enter current password"/>
                        </div>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            New Password
                        </label>
                        <div class="relative">
                            <span class="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                                <i class="far fa-eye-slash"></i>
                            </span>
                            <input type="text" class="input-box" placeholder="enter new password"/>
                        </div>
                    </div>
                    <div>
                        <label class="text-gray-600 mb-2 block">
                            Confirm Password
                        </label>
                        <div class="relative">
                            <span class="absolute right-3 top-3 text-sm text-gray-500 cursor-pointer">
                                <i class="far fa-eye-slash"></i>
                            </span>
                            <input type="text" class="input-box" placeholder="enter confirm password"/>
                        </div>
                    </div>
                </div>
                <div class="mt-6">
                    <button type="submit"
                        class="px-6 py-2 text-center text-white bg-primary border border-primary rounded hover:bg-transparent hover:text-primary transition uppercase font-roboto font-medium">
                        Save change
                    </button>
                </div>
            </form>
        </div>
        {/* <!-- account content end --> */}
    </div>
    {/* <!-- account wrapper end --> */}
    </>
  )
}

export default EditPassword