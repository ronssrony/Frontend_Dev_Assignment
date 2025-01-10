<template>
    <div class="translate-y-20 p-10  ">
       <div v-if="loadingState">
          <h1>Loading.....</h1>
       </div>
       <div v-else>
        <div v-for="item in products" :key="item.id">
          <ProductCard :product="item"  />     
        </div>
       </div>
    </div>
</template>

<script setup >
   const loadingState = ref(false)
   const {data:products ,isLoading , error} = await useApi('https://fakestoreapi.com/products')  ; 

   watch(isLoading , ()=>{
         loadingState.value = isLoading.value
         console.log(loadingState.value)
   })

</script>

<style scoped>

</style>