import React from 'react'
import { IoHome } from "react-icons/io5";
import { FaChevronRight } from "react-icons/fa";

const Breadcrumb = ({heading,productName}) => {
  return (
      <div class="py-4 container flex gap-3 items-center">
      <a href="index.html" class="text-primary text-base">
          <IoHome/>
      </a>
      <span class="text-sm text-gray-400"><FaChevronRight /></span>
      <p class={`${productName?'text-primary':'text-gray-600'} font-medium uppercase`}>{heading}</p>
        {productName && 
        <>
        <span class="text-sm text-gray-400"><FaChevronRight /></span>
        <p class="text-gray-600 font-medium uppercase">{productName}</p>
        </>}
       
  </div>
  )
}

export default Breadcrumb