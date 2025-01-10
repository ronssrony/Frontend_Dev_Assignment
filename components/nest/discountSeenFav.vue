<template>
  <div class="flex justify-between h-5">
    <span
      class="bg-blue-300/40 px-2 py-0 rounded-md text-sm text-blue-900 font-bebas"
      >Up to {{ Math.round(Math.random() * 40 + 9) }}% off</span
    >
    <div class="flex gap-3">
      <button>
        <Icon
          name="material-symbols:visibility-outline"
          class="text-black/60"
        ></Icon>
      </button>
      <button @click="favStore.addToFav(product)"><Icon name="ri:heart-line" class="text-black/60"></Icon></button>
    </div>
  </div>
</template>

<script setup>
import { useFavStore } from '~/stores/favourites';
const {product} = defineProps(['product'])
const favStore = useFavStore()
</script>
 
<style></style>
