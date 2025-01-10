<template>
  <div class="w-52 h-80 relative p-4 shadow-md rounded flex flex-col  justify-between border-2 border-slate-50">
           <picture class="w-full h-1/2 relative  ">
               <img class="rounded-md object-contain absolute w-full h-full " :src="product.image" alt="" srcset="">
            </picture>
            <div class="flex justify-between h-5">
              <span class="bg-blue-300/40  px-2 py-0 rounded-md text-sm text-blue-900 font-bebas  ">Up to {{Math.round(Math.random()*40+9)}}% off</span>
             <div class="flex gap-3">
              <button> <Icon name="material-symbols:visibility-outline" class="text-black/60 " ></Icon> </button>
              <button> <Icon name="ri:heart-line" class="text-black/60 "></Icon> </button>
             </div>
            </div>
            <h1 class="font-medium line-clamp-2 w-full">{{ product.title }}</h1>
            <div class="ratting flex items-center justify-start gap-3">
              <div class="stars flex items-center ">
                  
            
             
                  <span class="text-[12px] font-bold text-black/50"> {{product.rating.rate }} </span>
              </div>
              <p class="text-[12px] font-bold text-black/50">({{product.rating.count}})</p>
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
             <h1 class="font-bold ">${{product.price}}</h1>
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