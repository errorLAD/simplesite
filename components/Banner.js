
const Banner = () => {
return(
    <>
<div class="px-2 sm:mt-10 sm:px-6 md:mt-16 lg:mt-15 lg:px-8 xl:mt-15 ">
<div class="max-w-md mx-auto bg-white rounded-xl   md:max-w-6xl ">
        <h1 class=" font-semibold text-gray-900 font-serif  text-xl tracking-tigh ">
        <span class="underline underline-offset-8 ..">   Recent News </span>
        </h1>
<div class="">
<div class="max-w-7xl mx-auto py-12 px-12 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
  
    <div class=" text-gray-900 sm:text-4xl hidden md:block ">
    <span class="block  text-sm font-serif text-gray-600">Where To Travel </span>
      <span class="block font-serif">Matoa Where To </span>
      <span class="block font-serif ">Travel? Yogyakarta</span>
       <span class="py-8">
    <button class="bg-white hover:bg-orange-500 text-gray-800  text-sm py-2 px-4 border border-dark-400  shadow">
    Discover
  </button></span>
    </div>
     {/* mobile screen start */}

      
    <div class=" text-gray-900 sm:text-4xl lg:hidden md:block ">
    <span class="block  text-sm font-serif text-gray-400">Where To Travel </span>
       <span class="block font-serif">Matoa Where To </span>
       <span class="block font-serif ">Travel? Yogyakarta</span>
       <span class="py-8">
         <p class="py-2"></p>
    <button class="bg-white hover:bg-orange-500 text-gray-800  text-sm py-2 px-4 border border-dark-400  shadow">
        Discover
    </button></span>
    </div>
   
   {/* end mobile screen */}
    <div class="bg-indigo-800 ">
    <div class="mt-12 flex lg:mt-0 lg:flex-shrink-0 bg-indigo-500  ">
        <img class="w-46 h-46 mx-auto bg-indigo-500 shadow-lg shadow-indigo-500/50 " src="https://imgur.com/yg1Tq2q.jpg" alt="" />
             
    </div>
    </div>
  </div>
  
</div>
</div>
</div>

    </>
)
}

export default Banner
