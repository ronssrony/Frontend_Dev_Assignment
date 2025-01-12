<template>
   <div
    class="w-72 h-96 relative p-4 shadow-sm rounded flex flex-col justify-between border-2 border-black-50"
  >
    <button class="absolute top-0 right-0" @click="deleteFromFav">
      <Icon name="ic:baseline-delete" class="text-slate-400" size="20"></Icon>
    </button>
    <NuxtLink :to="`/products/${product.id}`" class="w-full h-1/2 relative">
      <img
        class="rounded-md object-contain absolute w-full h-full"
        :src="product.image"
        alt=""
        srcset=""
      />
    </NuxtLink>
    <NestDiscountSeenFav :product="product" />
    <NuxtLink :to="`/products/${product.id}`"><h1 class="font-medium line-clamp-2 w-full">{{ product.title }}</h1></NuxtLink>
    <NuxtLink :to="`/products/${product.id}`" class="ratting flex items-center justify-start gap-3">
      <div class="stars flex items-center">
        <NestDynamicStars :rate="product.rating.rate" />

        <span class="text-[12px] font-bold text-black/50 pl-1">
          {{ product.rating.rate }}
        </span>
      </div>
      <p class="text-[12px] font-bold text-black/50">
        ({{ product.rating.count }})
      </p>
    </NuxtLink>
    <NestBestThings />
    <div class="flex justify-between items-center">
      <h1 class="font-bold text-lg">${{ product.price }}</h1>
      <NestAddToCart :product="product" />
    </div>
  </div>
</template>

<script  setup>
import { useFavStore } from '~/stores/favourites';

const { product } = defineProps(["product"]);
const  favStore = useFavStore() ;

const deleteFromFav = ()=>{
      favStore.removeFromFav(product.id); 
} 


</script>

<style>

</style>