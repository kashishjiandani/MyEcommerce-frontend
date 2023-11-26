import React from 'react'

const CartCard = ({productName ,productPrice,productQuantity, productImg}) => {

    function calculateProductTotal({productPrice, productQuantity}) {
        const totalPrice = productPrice * productQuantity;
        return totalPrice.toLocaleString('en-IN', {
            style: 'currency',
            currency: 'INR'
        });
    }


  return (
    <div class="flex items-center md:justify-between gap-4 md:gap-6 p-4 border border-gray-200 rounded flex-wrap md:flex-nowrap">
                    {/* <!-- cart image --> */}
                    <div class="w-32 flex-shrink-0">
                        <img src={productImg} class="w-full"/>
                    </div>
                    {/* <!-- cart image end --> */}
                    {/* <!-- cart content --> */}
                    <div class="md:w-1/3 w-full">
                        <h2 class="text-gray-800 mb-3 xl:text-xl textl-lg font-medium uppercase">
                            {productName}
                        </h2>
                        <p class="text-primary font-semibold">₹ {productPrice}</p>
                        {/* <p class="text-gray-500">Size: M</p> */}
                    </div>
                    {/* <!-- cart content end --> */}
                    {/* <!-- cart quantity --> */}
                    <div class="flex border border-gray-300 text-gray-600 divide-x divide-gray-300">
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">-</div>
                        <div class="h-8 w-10 flex items-center justify-center">{productQuantity}</div>
                        <div class="h-8 w-8 text-xl flex items-center justify-center cursor-pointer select-none">+</div>
                    </div>
                    {/* <!-- cart quantity end --> */}
                    <div class="ml-auto md:ml-0">
                        <p class="text-primary text-lg font-semibold">{calculateProductTotal({productPrice,productQuantity})}</p>
                    </div>
                    <div class="text-gray-600 hover:text-primary cursor-pointer">
                        <i class="fas fa-trash"></i>
                    </div>
                </div>
  )
}

export default CartCard