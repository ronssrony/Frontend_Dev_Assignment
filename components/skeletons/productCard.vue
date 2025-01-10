<template>
  <div
    class="w-60 h-96 relative p-4 shadow-sm rounded flex flex-col justify-between bg-slate-300 animate-pulse"
  >
    <picture class="w-full h-1/2 relative">
      <img
        class="rounded-md object-contain absolute w-full h-full"
       
        alt=""
        srcset=""
      />
    </picture>
    <NestDiscountSeenFav />
    <h1 class="font-medium line-clamp-2 w-full"></h1>
    <div class="ratting flex items-center justify-start gap-3">
      <div class="stars flex items-center">
        <NestDynamicStars />

        <span class="text-[12px] font-bold text-black/50 pl-1">
       
        </span>
      </div>
      <p class="text-[12px] font-bold text-black/50">
      
      </p>
    </div>
    <NestBestThings />
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-lg"></h1>
      <NestAddToCart />
    </div>
  </div>
</template>

<script lang="ts" setup>

</script>

<style>

</style>