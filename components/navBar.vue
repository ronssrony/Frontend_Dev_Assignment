<template>
   <header class="bg-white/95 fixed w-full z-10 shadow-md">
    <nav
        class="flex justify-between max-sm:justify-normal items-center font-bebas px-10 py-4"
      >
        <button class="w-1/3 text-left max-sm:justify-self-start">Menu</button>
        <h1
          class="w-1/3 text-center text-5xl max-sm:justify-self-left tracking-widest"
        >
          <NuxtLink to="/">Imazine</NuxtLink>
        </h1>
        <ul v-for="item in navItems" :key="item" class="w-1/3 flex gap-8 justify-end max-sm:hidden">
          <li><NuxtLink :to="item.link">{{ item.name }}</NuxtLink></li>
          <li>
            <NuxtLink to="/favourites" class="min-w-fit flex items-center"
              >Favourites
              <Icon
                name="ic:baseline-favorite"
                size="18"
                class="mb-[2px] ml-[2px] text-black/70"
              ></Icon>
              <sup class="font-bold">{{ favStore.fav.length }}</sup>
            </NuxtLink>
          </li>

          <li>
            <NuxtLink class="min-w-fit flex items-center" to="/cart">
              <Icon
                name="ri:shopping-cart-fill"
                size="18"
                class="mb-[2px] ml-[2px] text-black/70"
              ></Icon>
              <sup class="font-bold">
                {{ cartStore.cart.length }}
              </sup>
            </NuxtLink>
          </li>
        </ul>
      </nav>
      </header>
</template>

<script  setup>
import { useCartStore } from "~/stores/cart";
import { useFavStore } from "~/stores/favourites";
const cartStore = useCartStore();
const favStore = useFavStore();
const menu = ref(false);

const navItems = [
  {
    name: "Products",
    link: "/products",
  }
 
];
</script>

<style>

</style>