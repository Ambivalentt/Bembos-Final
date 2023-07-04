<script setup>
import axios from 'axios';
import {ref} from 'vue';

const products = ref([])
const bembosJson = async () =>{
    const request = await axios.get('https://front-mrt-default-rtdb.firebaseio.com/productos.json')
    products.value = request.data.filter(item => item.product === "hamburguesa" && item.type === "carne")
}
bembosJson()
</script>

<template>
    <main class="w-full">
        <section>
            <header>
                <h1>DISFRUTA DE NUETRAS HAMBURGUESAS A LA PARRILLA!</h1>
            </header>
            <main>
                <article v-for="product in products" :key="product.id">
                   <img :src="product.img" alt="">
                </article>
            </main>
        </section>

    </main>
</template>

<style scoped></style>