<template>
  <div class="translate-y-4">
  <div class="flex max-md:flex-col  justify-center items-center gap-10 py-4  ">
       <div class="md:w-1/3 md:min-w-96  flex justify-center  aspect-auto relative ">
        <img class="md:w-[70%]  h-full object-cover" :src="product.image" alt="" srcset="">
      </div>
      <div class="md:w-1/3 md:min-w-96 w-full flex flex-col max-md:items-start max-md:px-10 max-sm:px-5 gap-4 ">
        <h1 class="text-4xl">{{ product.title }}</h1>
        <div class="flex items-center gap-5">
          <h1 class="text-2xl font-semibold ">Price: ${{ product.price }}</h1>

           <div class="flex items-center gap-4">
            <div class="flex items-center gap-1">
                 <NestDynamicStars :rate="product.rating.rate"/>
            <p>({{ product.rating.rate }})</p>
            </div>
            <span class="flex underline break-keep ">
              <p>{{ product.rating.count }} Reviews</p>
            </span>
           </div>
        </div>

        <div class="flex gap-5">
          <button class=" text-black text-sm font-medium border border-black/0 hover:border hover:border-black/50 transition-colors shadow-sm p-1 px-2 flex items-center gap-1 rounded-lg ">
            <Icon name="ri:heart-line" class="text-black/60"></Icon>
           Add to favourites</button>
          <NestAddToCart/>
        </div>
        <p class=" text-black/60  ">{{ product.description }}</p>
        </div>
        
    </div>
  </div>
</template>

<script setup>
  const {id} = useRoute().params; 
  const {data:product , error} = await useApi(`https://fakestoreapi.com/products/${id}`); 
</script>

<style lang="scss" scoped>

</style>