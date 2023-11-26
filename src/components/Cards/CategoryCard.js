import React from 'react'

const CategoryCard = ({picture,name}) => {
  return (
    <div class="relative group rounded-sm overflow-hidden">
            <img src={picture} class="w-full" />
            <a
              href="#"
              class="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 flex items-center justify-center text-xl text-white 
                    font-roboto font-medium tracking-wide transition"
            >
              {name}
            </a>
    </div>
  )
}

export default CategoryCard