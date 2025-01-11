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
      <button @click="toggleFavorite"><Icon :name="isFav?`ic:baseline-favorite`:'ic:baseline-favorite-border'" class="text-slate-700"></Icon></button>
    </div>
  </div>
</template>

<script setup>
import { useFavStore } from '~/stores/favourites';
const isFav = ref(false)
const {product} = defineProps(['product'])
const favStore = useFavStore()
const favoriteOrNot = favStore.fav.find((item)=> item.id===product.id)
if(favoriteOrNot)
{isFav.value=true}
const toggleFavorite = () => {
  isFav.value = !isFav.value;

  if (isFav.value) {
    favStore.addToFav(product);
  } else {
    favStore.removeFromFav(product.id);
  }
};

</script>
 
<style></style>
