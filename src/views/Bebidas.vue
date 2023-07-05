<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const products = ref([])
const bembosJson = async () =>{
    const request = await axios.get('https://front-mrt-default-rtdb.firebaseio.com/productos.json')
    products.value = request.data.filter(item => item.product === "bebida" && item.type !== "combo")
}
bembosJson()
</script>

<template>
<main class="w-full bg-gray-100 pt-44">
        <section class="bg-white mx-auto max-w-5xl p-6">
            <header>
                <h1 class="text-blue-800 text-3xl custom-font font-semibold pb-4">DISFRUTA DE NUETRAS HAMBURGUESAS A LA PARRILLA!</h1>
            </header>
            <main class="grid grid-cols-2 lg:grid-cols-3 gap-5">
                <article v-for="bebida in products" :key="bebida.id">
                    <section class="h-full w-full">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    :src="bebida.img" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">{{ bebida.name }}</h2>
                                <main class="flex items-center gap-2 sm:gap-4 justify-center">
                                    <h4 class=" text-base sm:text-2xl font-bold">S/.{{ bebida.price }} </h4>
                                </main>
                                <footer class="pt-2 flex w-full justify-center flex-col items-center">
                                    <span class="text-center underline pb-2 font-semibold text-sm">Terminos y servicios</span>
                                    
                                </footer>
                            </main>
                        </article>
                    </section>
                </article>
            </main>
        </section>
    </main>
</template>

<style>
</style>