<template>
  <div class="w-52 h-80 relative p-4 shadow-md rounded flex flex-col justify-between border-2 border-slate-50">
           <picture class="w-full h-2/6 relative ">
               <img class="rounded-md object-cover object-center " src="/assets/images/ll.jpg" alt="" srcset="">
            </picture>
            <div class="flex justify-between h-5">
              <span class="bg-blue-300/40  px-2 py-0 rounded-md text-sm text-blue-900 font-bebas  ">Up to 35% off</span>
             <div class="flex gap-3">
              <button> <Icon name="material-symbols:visibility-outline" class="text-black/60 " ></Icon> </button>
              <button> <Icon name="ri:heart-line" class="text-black/60 "></Icon> </button>
             </div>
            </div>
            <h1 class="font-medium line-clamp-2 w-full">Apple iMac 23" , 1TB HDD ,Retina 5K display, M3 Max</h1>
            <div class="ratting flex items-center justify-start gap-3">
              <div class="stars flex items-center ">
                  <Icon name="material-symbols:star-rounded" color="yellow" class="text-yellow-500"></Icon>  
                  <Icon name="material-symbols:star-rounded" color="yellow" class="text-yellow-500"></Icon> 
                  <Icon name="material-symbols:star-rounded" color="yellow" class="text-yellow-500"></Icon> 
                  <Icon name="material-symbols:star-half-rounded" color="yellow" class="text-yellow-500"></Icon>      
                  <Icon name="material-symbols:star-outline-rounded" color="yellow" class="text-yellow-500"></Icon>     
                  <span class="text-[12px] font-bold text-black/50">4.9</span>
              </div>
              <p class="text-[12px] font-bold text-black/50">(455)</p>
            </div>
            <div class="text-black/50 text-[12px] font-medium flex gap-3 ">
             <span class="flex items-center gap-1">
              <Icon name="hugeicons:delivery-truck-02" class="" ></Icon>
              <p>Fast Delivery</p>
             </span>
             <span class="flex items-center gap-1">
              <Icon name="hugeicons:delivery-truck-02" class="" ></Icon>
              <p>Best Price</p>
             </span>
            </div>

          <div class="flex justify-between">
             <h1 class="font-bold ">$1,699</h1>
            <button class=" bg-blue-600 text-white text-sm  px-2 py-1 rounded-md flex gap-1 items-center">
              <Icon name="ic:outline-add-shopping-cart" color="white" ></Icon>
              Add to cart
            </button>
          </div>
       </div>
</template>

<script  setup>
          const {product} = defineProps(['product']);  
          console.log(product)
</script>

<style>

</style>