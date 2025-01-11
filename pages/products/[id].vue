<template>
  <div v-if="isLoading">
     <SkeletonsProductDetail/>
  </div>
  <div v-else>
    <div v-if="product">
     <div class="translate-y-4">
  <div class="flex max-md:flex-col  justify-center items-center gap-10 py-4  ">
       <div class="md:w-1/3 md:min-w-96  flex justify-center  aspect-auto relative ">
        <img class="md:w-[70%]  h-full object-cover" :src="product?.image" alt="" srcset="">
      </div>
      <div class="md:w-1/3 md:min-w-96 w-full flex flex-col max-md:items-start max-md:px-10 max-sm:px-5 gap-4 ">
        <h1 class="text-4xl">{{ product?.title }}</h1>
        <div class="flex items-center gap-5">
          <h1 class="text-2xl font-semibold ">Price: ${{ product?.price }}</h1>

           <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
                 <NestDynamicStars :rate="product.rating.rate"/>
            <p>({{ product?.rating.rate }})</p>
            </div>
            <span class="flex underline break-keep ">
              <p>{{ product?.rating.count }} Reviews</p>
            </span>
           </div>
        </div>

        <div class="flex gap-5">
          <NestAddToFav :product="product"/>
          <NestAddToCart :product="product"/>
        </div>
        <p class=" text-black/60  ">{{ product.description }}</p>
        </div>
        
    </div>
  </div>
    </div>
  </div>
</template>

<script setup>
  const {id} = useRoute().params; 
  
  const isLoading = ref(false)
  const product = ref(''); 
  const init = async()=>{
    isLoading.value = true;
  const {data , error} = await useApi(`https://fakestoreapi.com/products/${id}`); 
    if(data) {isLoading.value = false ; product.value = data.value}
    else {
      isLoading.value = false ; 
      console.log(error)
    }
  }

  onMounted(()=>{
      init(); 
  })
 
  

</script>

<style lang="scss" scoped>

</style>