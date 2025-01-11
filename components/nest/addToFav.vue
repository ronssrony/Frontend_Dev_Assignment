<template>
   <button @click="toggleFavorite" class=" text-black text-sm font-medium border border-black/0 hover:border hover:border-black/50 transition-colors shadow-sm p-1 px-2 flex items-center gap-1 rounded-lg ">
            <Icon :name="isFav?`ic:baseline-favorite`:'ic:baseline-favorite-border'" class="text-black/60"></Icon>
           Add to favourites</button>
</template>

<script  setup>
import { useFavStore } from '~/stores/favourites';
  const favStore = useFavStore()
  const {product} = defineProps(['product']); 
  const isFav = ref(false)
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

<style>

</style>