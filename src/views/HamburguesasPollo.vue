<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const products = ref([])
const bembosJson = async () =>{
    const request = await axios.get('https://front-mrt-default-rtdb.firebaseio.com/productos.json')
    products.value = request.data.filter(item => item.product === "hamburguesa" && item.type === "pollo")
}
bembosJson()
</script>

<template>
    <menu>
        <section v-for="pollo in products" :key="pollo.id">
            <img :src="pollo.img" alt="">
        </section>
    </menu>
    
</template>

<style scoped>
</style>