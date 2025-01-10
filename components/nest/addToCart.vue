<template>
  <div>
    <button
    @click="cartStore.addToCart(product)"
      class="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-medium p-2 rounded-md flex gap-1 items-center"
    >
      <Icon name="ic:outline-add-shopping-cart" color="white"></Icon>
      Add to cart
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';

 const cartStore = useCartStore(); 
const {product} = defineProps(['product'])

</script>

<style></style>
