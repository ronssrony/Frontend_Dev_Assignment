<template>
    <h1 class="text-xl text-black/80 p-5">Your Cart</h1>
        <div v-if="cartStore.cart.length<=0">
   <div  class="flex justify-center md:text-4xl text-3xl font-medium items-center text-black/30 pt-5 ">
      <h1>The cart is empty</h1>
    </div>
    </div>
    <div v-else>
       <div class="flex flex-col lg:flex-row gap-8 p-10">
  <div class="w-full lg:w-2/3">
    <div class="space-y-4">
      <div class="flex flex-col gap-6">
      
        <div v-for="item in cartStore.cart">
              
              <CartProductCard :product="item" @modifyVolume="modifyVolume"/>
        </div>

      </div>
    </div>
  </div>

  <div class="w-full lg:w-1/3">
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Order Summary</h2>
      <div class="space-y-2">
        <div class="flex justify-between text-gray-700">
          <span>Original Price</span>
          <span class="font-semibold">${{ Math.round(originalPrice) }}</span>
        </div>
        <div class="flex justify-between text-green-500">
          <span>Savings</span>
          <span class="font-semibold">-${{Math.round(savings)}}</span>
        </div>
        <div class="flex justify-between text-gray-700">
          <span>Store Pickup</span>
          <span class="font-semibold">${{storePickup}}</span>
        </div>
        <div class="flex justify-between text-gray-700">
          <span>Tax</span>
          <span class="font-semibold">${{Math.round(tax)}}</span>
        </div>
        <div class="flex justify-between text-xl font-bold mt-4">
          <span>Total</span>
          <span>${{Math.round(total)}}</span>
        </div>
      </div>
      <button class="bg-blue-600 text-white w-full py-2 mt-6 rounded-md font-semibold hover:bg-blue-700 transition"> Proceed to Checkout </button>
      <div class="text-center mt-4">
        <a href="/" class="text-blue-600 hover:underline"> or Continue Shopping </a>
      </div>
      <div class="bg-gray-100 p-4 mt-6 rounded-md">
        <label for="voucher" class="block text-sm text-gray-600 mb-2">Do you have a voucher or gift card?</label>
        <input type="text" id="voucher" class="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Enter code">
        <button class="w-full bg-blue-600 text-white py-2 mt-4 rounded-md font-semibold hover:bg-blue-700 transition"> Apply Code </button>
      </div>
    </div>
  </div>
</div>
    </div>

</template>

<script  setup>
import CartProductCard from '~/components/cartProductCard.vue';
import { useCartStore } from '~/stores/cart';
 const originalPrice = ref(0) ;
 const savings = ref(0) ;
 const storePickup =ref(50) ; 
 const tax = ref(0) ; 
 const total = ref(0) ;
 const cartStore = useCartStore();

 function initialState(){
      cartStore.cart.forEach(element => {
      originalPrice.value = originalPrice.value + element.price*element.volume ;
 });
      savings.value = originalPrice.value*(5/100); 
      tax.value = originalPrice.value*(10/100)
      total.value = originalPrice.value -savings.value+tax.value+storePickup.value ;
 }

 onMounted(()=>{
   initialState()
 })

 function modifyVolume(){
  originalPrice.value = 0 ;
     cartStore.cart.forEach(element => {
            originalPrice.value = originalPrice.value + element.price*element.volume ;
 });
   savings.value = originalPrice.value*(5/100); 
      tax.value = originalPrice.value*(10/100)
      total.value = originalPrice.value -savings.value+tax.value+storePickup.value ;
}

</script>

<style>

</style>