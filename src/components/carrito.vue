<script setup>
import { inject, ref, watch } from 'vue';
const globalData = inject('globalData')

const productosCompradosRef = ref(globalData.value.productosComprados)

const removeFromCard = (index) => {
    productosCompradosRef.value.splice(index, 1)
}
//carrito menu
const carritoStatus = inject('carritoStatus');

const closeCart = () => {
    carritoStatus.value = false
}
const totalPrice = ref(0);
const calculateTotalPrice = () => {
  const prices = productosCompradosRef.value.map(product => parseFloat(product.price))
  const priceItems = ref(prices.reduce((total, price)=> total + price,0))
  totalPrice.value = priceItems.value.toFixed(2)
  
};
watch(productosCompradosRef, calculateTotalPrice, { deep: true });
</script>
  
<template>
    <section :class="{ 'hidden': carritoStatus == false }, { 'block': carritoStatus == true }"
        class="w-screen  h-screen fixed z-10 top-0 bg-opacity-60 bg-black">
        <aside :class="{ 'w-custom-open': carritoStatus == true }, { ' transform': carritoStatus == false }"
            class="fixed right-0 bg-white w-custom opacity-100 h-full max-h-max overflow-auto  ">
            <header class="flex justify-end items-center h-20 w-full pe-5">
                <div class="bg-red-700 w-10 h-10 flex items-center justify-center rounded-full">
                    <button @click="closeCart" type="button"
                        class="text-3xl font-bold leading-tight text-white">&times;</button>
                </div>
            </header>
            <main class="ps-5 ">
                <section v-for="(product, index) in productosCompradosRef" :key="index">

                    <div class="">
                        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr class="flex gap-x-3">
                                    <th scope="col" class="py-3 block w-4">#</th>
                                    <th scope="col" class=" py-3 w-28 block">Nombre</th>
                                    <th scope="col" class=" py-3 w-24">Producto</th>
                                    <th scope="col" class=" py-3 w-20 ">Precio</th>
                                    <th scope="col" class="py-3 w-20"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr class="bg-white border-b flex items-center gap-x-3 dark:bg-gray-800 dark:border-gray-700">
                                    <th scope="row"
                                        class=" py-4 w-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {{ product.cantidad }}
                                    </th>
                                    <th class="py-4 block w-28 ">
                                        {{ product.name }}
                                    </th>
                                    <th class="py-4 w-24 block">
                                        <img class="w-20 max-h-16 object-cover rounded-xl" :src="product.img" alt="">
                                    </th>
                                    <th class=" py-4  w-20 block">
                                        S/.{{ product.price }}
                                    </th>
                                    <th class="pe-5 py-4 w-20 ">
                                        <button class="bg-red-600 text-white px-1 py-1 rounded-xl"
                                            @click="removeFromCard(index)">Remover</button>
                                    </th>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
            <footer class="flex justify-end pe-6 my-4 text-xl ">
                <button class="text-white bg-green-800 py-2 px-4 rounded-full">Pagar: S/.{{ totalPrice }}</button>
            </footer>
        </aside>
    </section>
</template>

<style scoped>
.w-custom-open {
    width: 500px;
}
</style>