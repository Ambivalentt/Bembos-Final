<script setup>
import { RouterLink, RouterView } from 'vue-router'
import axios from 'axios';
import { ref, inject } from 'vue';

//parametros de ruta
import { useRoute } from 'vue-router';
const route = useRoute();
const products = ref([])
const nameProduct = ref('')
const imgProduct = ref('')
const bembosJson = async () => {
    const response = await axios.get(`https://front-mrt-default-rtdb.firebaseio.com/productos/${route.params.id}.json`)
    products.value = response.data;
    nameProduct.value = response.data.name;
    priceProduct.value = response.data.price;
    imgProduct.value = response.data.img
}
bembosJson()
//productos cantidad
const priceProduct = ref()
const currentProduct = ref(1)
const productTotal = ref()

const productIncrease = () => {
    currentProduct.value++
    productTotal.value = (currentProduct.value * priceProduct.value).toFixed(2)
};
productIncrease()
const productDecrease = () => {
    currentProduct.value--
    productTotal.value = (currentProduct.value * priceProduct.value).toFixed(2)
}
productDecrease()

//Carrito

const globalData = inject('globalData')
const addToCart = () => {
    if (currentProduct.value === 1) {
        const item = {
            name: nameProduct.value,
            price: priceProduct.value,
            img: imgProduct.value,
            cantidad: currentProduct.value
        }

        globalData.value.productosComprados.push(item);
    }
    if (currentProduct.value >= 2) {
        const item = {
            name: nameProduct.value,
            price: productTotal.value,
            img: imgProduct.value,
            cantidad: currentProduct.value
        }

        globalData.value.productosComprados.push(item);
    }

    console.log(globalData.value.productosComprados)
}

</script>



<template>
    <nav class=" pt-20 md:pt-52  max-w-6xl mx-auto">
        <ul class="flex items-center font-semibold gap-1 font-nav">
            <li class="underline">
                <RouterLink to="/">Inicio</RouterLink>
            </li>
            <li><svg xmlns="http://www.w3.org/2000/svg" height="0.9em"
                    viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg></li>
            <li class="underline">
                <RouterLink to="/menu">Menú</RouterLink>
            </li>
            <li>
                <svg xmlns="http://www.w3.org/2000/svg" height="0.9em"
                    viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
            </li>
            <li class="underline">
                <RouterLink to="/menu/hamburguesas">Hamburguesas</RouterLink>
            </li>
            <li class="underline">
                <svg xmlns="http://www.w3.org/2000/svg" height="0.9em"
                    viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                        d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                </svg>
            </li>
            <li class="underline">
                <a href="#">{{ products.name }}</a>
            </li>
        </ul>
    </nav>
    <main class="pt-10 w-full mb-52">
        <section class="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
            <article class="flex md:w-4/12 ">
                <div class="w-80 px-2 md:px-0">
                    <img class="w-full rounded-lg h-full max-w-3xl max-h-80 object-cover" :src="products.img">
                </div>
            </article>

            <article class="md:w-8/12 md:ps-16 px-5 md:px-0">
                <h1 class="text-3xl text-blue-800 font-bold custom-font">Hamburguesa Bembos {{ products.name }}</h1>
                <div class="py-7">
                    <p class="custom-font">La <span class="font-bold">Hamburguesa Bembos</span> preferida por la mayoria:
                        <span class="font-bold"> Hamburguesa {{ products.name }}</span> que lleva unos ingredientes muy
                        buenos, uno de
                        los clásicos por excelencia
                    </p>
                </div>
                <div class="my-7">
                    <h2 class="custom-font font-bold pb-2">Ingredientes:</h2>
                    <ul class="custom-font list-disc ps-10">
                        <li>{{ products.type }}</li>
                    </ul>
                </div>
                <div>
                    <h3 class="custom-font">Pide tu Hamburguesa <span class="font-bold">{{ products.name }}</span> en tamaño
                        mediano o grande. Transfórmala en combo al agregar papas y gaseosas.</h3>
                </div>
            </article>
        </section>
    </main>
    <footer class="w-full bg-gray-100 fixed lg:bottom-0 bottom-10 items-center md:bottom-12 shadow-custom">
        <section class="flex justify-center h-20 items-center gap-x-2 md:gap-x-7 ">
            <p class="custom-font font-semibold text-blue-900">Cantidad</p>
            <div class="flex items-center gap-3">
                <div>
                    <button class="bg-gray-300 w-7 h-7 flex items-center justify-center" @click="productDecrease"
                        :disabled="currentProduct === 1">-</button>
                </div>
                <span>{{ currentProduct }}</span>
                <div class="bg-gray-300 w-7 h-7 flex items-center justify-center " @click="productIncrease">
                    <button>+</button>
                </div>
            </div>
            <div>
                <button class="text-white flex items-center gap-x-3 bg-blue-800 custom-font px-7 py-2 rounded-full" @click="addToCart"><span class=" hidden md:block">AGREGAR</span> 
                    <span class="text-lg" :class="{ 'hidden': currentProduct === 1 }, { 'block': currentProduct > 1 }">
                        S/.{{ productTotal }}
                    </span>
                    <span class="text-lg" :class="{ 'hidden': currentProduct > 1 }">
                        S/.{{ priceProduct }}
                    </span>
                </button>
            </div>
        </section>
    </footer>
    <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap');

.custom-font {
    font-family: 'Roboto Slab', serif;
}

@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

.font-nav {
    font-family: 'PT Sans Narrow', sans-serif;
}

.shadow-custom {
    box-shadow: 0px -4px 20px rgba(0, 0, 0, 0.2);
}
</style>