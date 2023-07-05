<script setup>
import { inject, ref } from 'vue';
const globalData = inject('globalData')  
const productosCompradosRef = ref(globalData.value) 
</script>
  
<template> 
   
</template>

<style></style>