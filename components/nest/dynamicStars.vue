<template>
  <div class="flex">
    <div v-for="star in 5">
      <div v-if="rate >= star">
        <Icon
          name="material-symbols:star-rounded"
          color="yellow"
          class="text-yellow-500"
        ></Icon>
      </div>
      <div v-else-if="Math.round(rate) > rate && Math.round(rate) >= star">
        <Icon
          name="material-symbols:star-half-rounded"
          color="yellow"
          class="text-yellow-500"
        ></Icon>
      </div>
      <div v-else>
        <Icon
          name="material-symbols:star-outline-rounded"
          color="yellow"
          class="text-yellow-500"
        ></Icon>
      </div>
    </div>
  </div>
</template>

<script setup>
const { rate } = defineProps(["rate"]);
console.log(rate);
</script>

<style></style>
