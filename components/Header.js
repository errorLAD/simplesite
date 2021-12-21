import header from '../styles/Header.module.css'
import { AiOutlineRight,AiOutlineLeft } from "react-icons/ai"
import { FaShoppingCart } from "react-icons/fa";


const Header = () => { 
    return( 
        <>
        
<div class="px-2 sm:mt-10 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-15 ">
<div class="max-w-md mx-auto bg-white rounded-xl shadow-md  md:max-w-6xl bg-indigo-50">
  
    <div class="md:flex">
    <div class="md:shrink-0">
    <div class="relative h-32 w-60">
         <div class="absolute h-55 w-60 sm:hidden md:block  sm:-bottom-60">
         <img class="h-58 w-full  hidden md:block sm:w-10 md:h-auto md:w-48" src="https://imgur.com/h2wJDvN.png" alt="Man looking at item at a store"/>
         <img class="h-40 left p-6 sm:hidden sm:w-5 md:h-auto md:w-20" src="https://imgur.com/h2wJDvN.png" alt="Man looking at item at a store"/>
  </div>
  </div>
  </div>
    <div class="p-5">
     <h2 class="text-3xl tracking-tight text-gray-900 sm:text-6xl =">
       <span class="block font-serif">WAY KAMBAS</span>
     <span class="block font-serif">MINI EBONY</span>
    </h2>

    <p class="mt-3 text-sm text-gray-500 ">
     MATOA Way Kambas - This wood is chosen to represent the Sumatran Rhino's skin which is designed with an overlap effect on its strap to represent Rhino's skin.
    </p>
      <h2 class="mt-3 font-serif text-base text-gray-900 tracking-tight font-extrabold ">
           Discover
      </h2>

     <div class="flex mt-4 space-x-4 mb-6 text-sm font-medium">
      <div class="flex-auto flex space-x-4">
        <button class="h-10 px-6 font-semibold  bg-black text-white " type="submit">
              Add to cart
        </button>
           <button class="h-10 px-6 font-semibold  bg-black text-white" type="submit">
        CiCi
        </button>
        <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-300 border border-gray-200" type="button" aria-label="Like">
        <svg width="20" height="20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" />
        </svg>
      </button>
      </div>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-900 border border-gray-200" type="button" aria-label="Like">
        <span width="20" height="20" fill="currentColor" aria-hidden="true">
          <AiOutlineLeft/>
        </span>
      </button>
      <button class="flex-none flex items-center justify-center w-9 h-9 rounded-md text-gray-900 border border-gray-200" type="button" aria-label="Like">
        <span width="20" height="20" fill="currentColor" aria-hidden="true">
          <AiOutlineRight/>
        </span>
      </button>
   
    </div>
      </div>
    </div>
</div>

</div>

        </>
    )
}
export default Header