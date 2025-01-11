<template>
    <div class=" p-10  ">
       <div v-if="isLoading">
        <div class="flex flex-wrap gap-8 items-center justify-center">
           <div v-for="shimmer in 12" >
              <SkeletonsProductCard/>
         </div>

        </div>
       </div>
       <div v-else>
        <div class="flex flex-wrap gap-8 items-center justify-center" v-if="products && products?.length" >
          <div  v-for="item in products" :key="item.id">
          <ProductCard :product="item"  />     
        </div>
        </div>
       </div>
    </div>
</template>

<script setup >
  const isLoading = ref(false)
  const products = ref([])
  const init = async()=>{
    isLoading.value = true;
     const {data ,error} = await useApi('https://fakestoreapi.com/products')  ;
    if(data && data.value.length>0) {isLoading.value = false ; products.value = data.value}
    else {
      isLoading.value = false ; 
      console.log(error)
    }
  }
  init(); 
    


</script>

<style scoped>

</style>