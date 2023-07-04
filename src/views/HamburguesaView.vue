<script setup>
import axios from 'axios';
import { ref } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const products = ref([])

const bembosJson = async () => {
    const request = await axios.get(`https://front-mrt-default-rtdb.firebaseio.com/productos/${route.params.id}.json`)
    products.value = request.data
    console.log(products.value)
}

bembosJson()
</script>

<template>
    <main  class="pt-56">
        
        <img :src="products.img">
       
    </main>
</template>

<style scoped>
</style>