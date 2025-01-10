<template >
    <div class=" max-w-[1300px]  " >
     <header class="  bg-white/95  fixed w-full z-10 shadow-md  ">
        <nav class="flex justify-between items-center font-bebas px-10 py-4 ">
            <h1 class="w-1/3 text-left">Menu</h1>
            <h1 class="w-1/3 text-center text-5xl  tracking-widest ">Imazine</h1>
            <ul class=" w-1/3  flex gap-8 justify-end ">
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
                <li><NuxtLink to="/favourites">Favourites</NuxtLink></li>
                <li><NuxtLink to="/cart">Cart</NuxtLink></li>
            </ul>
        </nav>
     </header>

     <div class="">
        <slot></slot>
     </div>
    </div>
</template>

<script setup>

</script>

<style  scoped>

</style>