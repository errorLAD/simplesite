
const Card = () => {
return(
    <>
<div class="py-24 bg-white gap-4 grid-cols-2 hidden md:block">
  <div class="max-w-6xl mx-auto px-6 sm:px-4 lg:px-2 gap-4 grid-cols-2">
     <div class="flex gap-4 grid-cols-2">
     <div class="basis-1/2 ">
     <div class="p-4 mx-auto bg-white rounded-xl shadow-lg  items-center space-x-4 bg-orange-50">
                               <h2 class="font-serif p-2">Luxurious <strong>Eyewear</strong> </h2>
                              <p class="font-serif text-gray-400 ">See the beauty of exotic world with </p>
                              <span class="font-serif text-gray-400">the luxurious glasses</span>
                               <h2 class="text-l font-serif">Discover Now</h2>
      <div class="flex justify-end ...">
      <img class="h-20" src="https://imgur.com/pMHc3jW.png" alt="Man looking at item at a store"/>
</div>
</div>
</div>

<div class="basis-1/2">
    <div class="p-4 mx-auto bg-white rounded-xl shadow-lg  items-center space-x-2 bg-red-50">
            <h2 class="font-serif p-2">Comfortable <strong>Watches </strong></h2>
            <p class="font-serif text-gray-400 ">Feels the balancing function and beauty in  </p>
            <span class="font-serif text-gray-400">our wooden watches</span>
            <h2 class="text-l font-serif font-serif">Discover Now</h2>
            <div class="flex justify-end ...">
           <img class="h-20" src="https://imgur.com/2Q6e4ga.png" alt=" store"/>
      </div>
</div>
</div>
</div>
</div>
</div>
{/* mobile scrreen */}

<div class="py-4 px-4 bg-white gap-4 grid-cols-2 lg:hidden md:block ">
     <div class="p-4 py-4 px-4 mx-auto bg-white rounded-xl shadow-lg  items-center space-x-4 bg-orange-50">
                               <h2 class="font-serif p-2">Luxurious <strong>Eyewear</strong> </h2>
                              <p class="font-serif text-gray-400 ">See the beauty of exotic world with </p>
                              <span class="font-serif text-gray-400">the luxurious glasses</span>
                               <h2 class="text-l font-serif">Discover Now</h2>
      <div class="flex justify-end ...">
      <img class="h-20" src="https://imgur.com/pMHc3jW.png" alt="Man looking at item at a store"/>
</div>
</div>
<p class="py-2 px-4"></p>
<div class="p-4 py-4 px-4 py-4 mx-auto bg-white rounded-xl shadow-lg  items-center space-x-2 bg-red-50">
            <h2 class="font-serif p-2">Comfortable <strong>Watches </strong></h2>
            <p class="font-serif text-gray-400 ">Feels the balancing function and beauty in  </p>
            <span class="font-serif text-gray-400">our wooden watches</span>
            <h2 class="text-l font-serif font-serif">Discover Now</h2>
            <div class="flex justify-end ...">
           <img class="h-20" src="https://imgur.com/2Q6e4ga.png" alt=" store"/>
</div>
</div>
</div>
</>
)
}

export default Card
