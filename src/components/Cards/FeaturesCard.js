import React from 'react'

const FeaturesCard = ({logo,heading,description}) => {
  return (
    <div class="border-primary border rounded-sm px-8 lg:px-3 lg:py-6 py-4 flex justify-center items-center gap-5">
    <img src={logo} class="lg:w-12 w-10 h-12 object-contain" />
    <div>
      <h4 class="font-medium capitalize text-lg">{heading}</h4>
      <p class="text-gray-500 text-xs lg:text-sm">{description}</p>
    </div>
  </div>
  )
}

export default FeaturesCard