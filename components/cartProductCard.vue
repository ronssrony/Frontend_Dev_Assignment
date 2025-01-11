<template>
    <div class="flex flex-col md:flex-row justify-between items-center gap-4 p-4 border rounded-lg shadow-md bg-white mb-4">
          <div class="flex-shrink-0">
            <img :src="product.image" alt="Product Image" class="h-24 w-24 md:h-32 md:w-32 object-contain">
          </div>
          <div class="flex flex-col w-full md:w-1/2 gap-2 md:gap-4">
            <h2 class="text-sm md:text-base font-semibold text-slate-900 text-center md:text-left">{{product.title}}</h2>
            <div class="flex justify-center md:justify-start gap-4 text-sm font-semibold">
              <button class="flex items-center gap-1 text-slate-500"> Add to Favorites </button>
              <button @click="removeFromCart" class="flex items-center gap-1 text-red-600"> Remove </button>
            </div>
          </div>
          <div class="flex justify-center md:justify-start items-center gap-2">
            <button @click="volumedecreament"  class="px-[8px] border-2 rounded-lg bg-slate-100 hover:bg-slate-300"> - </button>
            <span class="px-4 font-semibold">{{ num.volume }}</span>
            <button @click="volumeIncreament" class="px-[8px] border-2 rounded-lg bg-slate-100 hover:bg-slate-300"> + </button>
          </div>
          <div class="flex flex-col items-center md:items-end">
            <p class="text-lg font-bold text-slate-900">${{Math.round(product.price*num.volume)}}</p>
          </div>
        </div>
</template>

<script  setup>
import { useCartStore } from '~/stores/cart';

 const {product} = defineProps(['product']) ;
 const emit = defineEmits(['modifyVolume'])
 const cartStore = useCartStore() ; 
 const num = cartStore.cart.find((item)=>product.id===item.id);

 const volumeIncreament = ()=>{
  cartStore.volumeIncreament(product)
  emit('modifyVolume',  true)
 }
 const volumedecreament = ()=>{
   cartStore.volumeDecreament(product); 
   emit('modifyVolume', true)
 }
 const removeFromCart = ()=>{
  cartStore.removeFromCart(product.id); 
  emit('modifyVolume',true)
 }
</script>

<style>

</style>