<template>
  <div>
    <button
    @click="addToCart"
      class="bg-blue-600 hover:bg-blue-700 transition-colors text-white text-sm font-medium p-2 rounded-md flex gap-1 items-center"
    >
      <Icon name="ic:outline-add-shopping-cart" color="white"></Icon>
      Add to cart
    </button>
  </div>
</template>

<script lang="ts" setup>
import { useCartStore } from '~/stores/cart';
 import Swal from 'sweetalert2';
 const cartStore = useCartStore(); 
const {product} = defineProps(['product'])
 
const addToCart = ()=>{
 const addproduct = cartStore.addToCart(product) ;

 if(addproduct){
   Swal.fire({
  title: `${product.title}`,
  text: "Added to Cart",
  icon: "success",
  toast: true,
  position: "top-end", 
  timer: 1000, 

  timerProgressBar: true,
  showConfirmButton: false, 
});
 }
 else {
    Swal.fire({
  title: `${product.title}`,
  text: "Item has already in the cart",
  icon: "warning",
  toast: true,
  position: "top-end", 
  timer: 1000, 
  timerProgressBar: true,
  showConfirmButton: false, 
});
 }

}



 
</script>

<style></style>
