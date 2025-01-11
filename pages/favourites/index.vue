<template>
  <div class="p-5" >
    <h1 class="text-xl text-black/80">Your Favourite Items</h1>
   <div class="content p-10">
      <div v-if="favStore.fav.length>0">
<div class="flex flex-wrap gap-8 items-center justify-center">
    <div v-for="item in favStore.fav" :key="item.id">
          <FavCard :product="item" />
          {{ console.log(item) }}
   </div>
   </div>
    </div>
    <div v-else class="flex justify-center md:text-4xl text-3xl font-medium items-center text-black/30">
      <h1>No favourite products yet!</h1>
    </div>
   </div>
   
  </div>
</template>

<script  setup>
import { useFavStore } from '~/stores/favourites';

     const favStore = useFavStore(); 


</script>

<style>

</style>