<template >
    <div class=" max-w-[1300px]  " >
     <header class="  bg-white/95  fixed w-full z-10 shadow-md  ">
        <nav class="flex justify-between max-sm:justify-normal items-center font-bebas px-10 py-4 ">
            <button class="w-1/3 text-left max-sm:justify-self-start">Menu</button>
            <h1 class="w-1/3 text-center text-5xl max-sm:justify-self-left tracking-widest "><NuxtLink to="/">Imazine</NuxtLink></h1>
            <ul class=" w-1/3  flex gap-8 justify-end max-sm:hidden "> 
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/favourites" class="min-w-fit">Favourites {{ favStore.fav.length }}</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart {{ cartStore.cart.length }}  </NuxtLink></li>
            </ul>
        </nav>
     </header>

     <div class="translate-y-20">
        <slot></slot>
     </div>
    </div>
</template>

<script setup>
import { useCartStore } from '~/stores/cart';
import { useFavStore } from '~/stores/favourites';
 const cartStore = useCartStore(); 
 const favStore = useFavStore()
 const menu = ref(false) ;

</script>

<style  scoped>

</style>