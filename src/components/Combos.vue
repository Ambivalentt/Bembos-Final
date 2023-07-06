<script setup>
import axios from 'axios';
import {ref} from 'vue';
import { RouterLink, RouterView } from 'vue-router'
const products = ref([])
const bembosJson = async () =>{
    const request = await axios.get('https://front-mrt-default-rtdb.firebaseio.com/productos.json')
    products.value = request.data.filter(item =>  item.type == "combo")
}
bembosJson()
</script>

<template>
    <main class="w-full bg-gray-100 pt-20 lg:pt-44">
        <section class="bg-white mx-auto max-w-5xl p-6">
            <header>
                <h1 class="text-blue-800 text-3xl custom-font font-semibold pb-4">DISFRUTA DE NUETRAS PROMOCIONES WEB!</h1>
            </header>
            <main class="grid grid-cols-2 lg:grid-cols-3 gap-5">
                <article v-for="product in products" :key="product.id">
                    <section class="h-full w-full">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    :src="product.img" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">{{ product.name }}</h2>
                                <main class="flex items-center gap-2 sm:gap-4 justify-center">
                                    <h4 class=" text-base sm:text-2xl font-bold">S/.{{ product.price }} </h4>
                                </main>
                                <footer class="pt-2 flex w-full justify-center flex-col items-center">
                                    <span class="text-center underline pb-2 font-semibold text-sm">Terminos y servicios</span>
                                    <RouterLink :to="`/menu/hamburguesas/${product.id}`"><button
                                        class="bg-blue-800 text-white w-28 mx-3 h-8 sm:w-64 sm:h-10  rounded-full font-bold ">Ver
                                        más</button></RouterLink>
                                </footer>
                            </main>
                        </article>
                    </section>
                </article>
            </main>
        </section>
    </main>
    <RouterView/>
</template>

<style scoped>
.custom-font {
    font-family: 'PT Sans Narrow', sans-serif;
}

.custom-h-1 {
    height: 60%;
}

.height-custom {
    height: 30em;
}

@media (max-width:900px) {
    .height-custom {
        height: 22em;
    }

    .custom-h-1 {
        height: 60%;
    }
}

@media (max-width:600px) {
    .height-custom {
        height: 20em;
    }

    .custom-h-1 {
        height: 60%;
    }

}
</style>