<template>
     <div class="slider ">
        <div class="picture h-screen relative">
     <img class="object-cover w-full h-full " src="/assets/images/third.jpg" alt="" srcset="">
    </div>
    <div class="picture h-screen relative">
     <img class="object-cover w-full h-full " src="/assets/images/ll.jpg" alt="" srcset="">
    </div>
    <div class=" picture h-screen relative">
     <img class="object-cover w-full h-full " src="/assets/images/red.jpg" alt="" srcset="">
    </div>
     </div>
</template>

<script setup>
   import initializeSlider from "~/utils/sliderHelper.js"
    onMounted(()=>{
        initializeSlider(); 
    })
</script>

<style  scoped>

</style>