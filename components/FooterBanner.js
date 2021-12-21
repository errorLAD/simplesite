import { FaLongArrowAltLeft } from 'react-icons/fa';
import { AiOutlineArrowLeft,AiOutlineArrowRight } from "react-icons/ai"
const FooterBanner = () => {
return(
    <>
<div class="px-2 sm:mt-20 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-15 hidden md:block">
<div class="max-w-md mx-auto bg-white rounded-xl   md:max-w-6xl ">
<div class="p-16 grid grid-cols-2 gap-4">
  <div class="...">  
     <img class="w-50 h-50 mx-auto  " src="https://imgur.com/vIgAKgY.jpg" alt="" />
     <div class="flex gap-2">
            <button class="flex-none flex items-center justify-center w-9 h-9  text-gray-900 border border-gray-200" type="button" aria-label="Like">
        <span width="20" height="20" fill="currentColor" aria-hidden="true">
          <AiOutlineArrowLeft />
        </span>
      </button>
      <button class="flex-none flex items-center justify-center w-12 h-9  border border-gray-200" type="button" aria-label="Like">
        <span width="40" height="40" fill="currentColor" aria-hidden="true">
          <AiOutlineArrowRight/>
        </span>
      </button>
      </div>
      </div>
       <div class="...">
           <p class="mt-20 text-l font-serif leading-8  text-gray-900 sm:text-4xl">
        Testimonials
      </p>
        <p class="py-10 text-gray-500 font-serif ">
            Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.
        </p>
        <h5 class="font-serif "> 
            Gita Savitri
        </h5>
        <p class=" text-gray-500 font-serif ">
            Content Creator/Influencer
        </p>
       </div>

</div>
</div>
</div>


{/* mobile start 
*/}
<div class="sm:hidden">

<div class="px-2 py-16 sm:mt-10 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-15 ">
     <div class="...">  
     <img class="w-50 h-50 mx-auto  " src="https://imgur.com/vIgAKgY.jpg" alt="" />
     <div class="flex gap-2">
            <button class="flex-none flex items-center justify-center w-9 h-9  text-gray-900 border border-gray-200" type="button" aria-label="Like">
        <span width="20" height="20" fill="currentColor" aria-hidden="true">
          <AiOutlineArrowLeft />
        </span>
      </button>
      <button class="flex-none flex items-center justify-center w-12 h-9  border border-gray-200" type="button" aria-label="Like">
        <span width="40" height="40" fill="currentColor" aria-hidden="true">
          <AiOutlineArrowRight/>
        </span>
      </button>
      </div>
      </div>
          <div class="px-2 ...">
           <p class="px-mt-5 text-l font-serif leading-8  text-gray-900 sm:text-4xl">
        Testimonials
      </p>
        <p class="py-5 text-gray-500 font-serif ">
            Loving my new KAILI watch from @matoa_id, the first ever Indonesian watch local brand that uses wood as their main material. Like any other Matoa products, KAILI is inspired by Indonesian heritage.
        </p>
        <h5 class="font-serif "> 
            Gita Savitri
        </h5>
        <p class=" text-gray-500 font-serif ">
            Content Creator/Influencer
        </p>
       </div>

</div>





</div>
    </>
)
}

export default FooterBanner