<script setup>
import { inject, ref, watch } from 'vue';
//Lamamos a la variable global
const globalData = inject('globalData')
const productosCompradosRef = ref(globalData.value.productosComprados)
//separamos y eliminamos por indice
const removeFromCard = (index) => {
    productosCompradosRef.value.splice(index, 1)
}
//carrito abrir y cerrar menu variable global 
const carritoStatus = inject('carritoStatus');

const closeCart = () => {
    carritoStatus.value = false
}
//precio total de todos los productos, recorremos con mapa y con el metodo reduce sumamos
const totalPrice = ref(0);
const calculateTotalPrice = () => {
    const prices = productosCompradosRef.value.map(product => parseFloat(product.price))
    const priceItems = ref(prices.reduce((total, price) => total + price, 0))
    totalPrice.value = priceItems.value.toFixed(2)

};
//Reenderiza las funciones y variables
watch(productosCompradosRef, calculateTotalPrice, { deep: true });
</script>
  
<template>
    <section :class="{ 'hidden': carritoStatus == false }, { 'block': carritoStatus == true }"
        class="w-screen  h-screen fixed z-10 top-0 bg-opacity-60 bg-black">
        <aside :class="{ 'w-custom-open': carritoStatus == true }, { ' transform': carritoStatus == false }"
            class="fixed right-0 bg-white w-custom opacity-100 h-full max-h-max overflow-auto  ">
            <section>
                <!--CAR WITHOUT PRODUCTS-->
                <secionn v-if="productosCompradosRef.length === 0">
                    <header class="flex justify-end items-center h-20 w-full pe-5">
                        <div class="bg-red-700 w-10 h-10 flex items-center justify-center rounded-full">
                            <button @click="closeCart" type="button"
                                class="text-3xl font-bold leading-tight text-white">&times;</button>
                        </div>
                    </header>
                    <main class="h-96 flex flex-col items-center justify-center max-w-sm mx-auto">
                        <div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4My44MDMiIGhlaWdodD0iNTYuNDk0IiB2aWV3Qm94PSIwIDAgODMuODAzIDU2LjQ5NCI+PHBhdGggZD0iTTE4LjA2NCw1NS40OTRhNy41NDIsNy41NDIsMCwwLDEtNy4yNDctNi4xNjFMNS42OTUsMTkuMTkzYTYuMzI2LDYuMzI2LDAsMCwxLS4wODctMS4wMTVBNi43MjUsNi43MjUsMCwwLDEsMCwxMS41NDJ2LTQuOEE2LjczMiw2LjczMiwwLDAsMSw2LjcsMEg3Ni4xMTRBNi43MjYsNi43MjYsMCwwLDEsODIuOCw2Ljc0NXY0LjhhNi43MjcsNi43MjcsMCwwLDEtNS42LDYuNjM2LDUuODgzLDUuODgzLDAsMCwxLS4wOTMsMS4wMTVsLTUuMTIzLDMwLjE0YTcuNTQyLDcuNTQyLDAsMCwxLTcuMjQ4LDYuMTYxWk0xNyw0OC4yNjlhMS4yODgsMS4yODgsMCwwLDAsMS4wNjEuOTA2SDY0LjczOGExLjMsMS4zLDAsMCwwLDEuMDY3LS45MDZsNS4xLTI5Ljk3Ny01OS0uMDA1Wk02LjI3NCw2Ljc0NXY0LjhhLjQzNC40MzQsMCwwLDAsLjQyMi40MjZINzYuMTE0YS40MjkuNDI5LDAsMCwwLC40MTYtLjQyNnYtNC44YS40MzQuNDM0LDAsMCwwLS40MTYtLjQyNkg2LjdBLjQzOS40MzksMCwwLDAsNi4yNzQsNi43NDVaTTUyLjA2NSw0MS4wODJ2LTE1LjVhMy4xMzgsMy4xMzgsMCwxLDEsNi4yNzYsMHYxNS41YTMuMTM4LDMuMTM4LDAsMSwxLTYuMjc2LDBabS0xMy44LDB2LTE1LjVhMy4xMzcsMy4xMzcsMCwxLDEsNi4yNzMsMHYxNS41YTMuMTM3LDMuMTM3LDAsMSwxLTYuMjczLDBabS0xMy44LDB2LTE1LjVhMy4xMzcsMy4xMzcsMCwxLDEsNi4yNzQsMHYxNS41YTMuMTM3LDMuMTM3LDAsMSwxLTYuMjc0LDBaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwLjUgMC41KSIgZmlsbD0iI2UxMGIxOSIgc3Ryb2tlPSJyZ2JhKDAsMCwwLDApIiBzdHJva2Utd2lkdGg9IjEiLz48L3N2Zz4=" alt="">
                        </div>
                        <h5 class=" text-md text-center my-3">Tu canasta esta vacía</h5>
                        <p class="text-center text-xl font-bold">Te invitamos a volver a nuestras tiendas y agregar productos a tu canasta</p>
                    </main>
                </secionn>
            </section>
            <!--CAR WITHONE OR MORE PRODUCTS-->
            <section v-if="productosCompradosRef.length >= 1">
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
                                <thead
                                    class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                    <tr class="flex gap-x-3">
                                        <th scope="col" class="py-3 block w-4">#</th>
                                        <th scope="col" class=" py-3 w-16 sm:w-28 block">Nombre</th>
                                        <th scope="col" class=" py-3 w-20 sm:w-24">Producto</th>
                                        <th scope="col" class=" py-3 w-20  sm:w-20 ">Precio</th>
                                        <th scope="col" class="py-3 w-20 sm:w-20"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr
                                        class="bg-white border-b flex items-center gap-x-3 dark:bg-gray-800 dark:border-gray-700">
                                        <th scope="row"
                                            class=" py-4 w-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                            {{ product.cantidad }}
                                        </th>
                                        <th class="py-4 w-16 block sm:w-28 ">
                                            {{ product.name }}
                                        </th>
                                        <th class="py-4 w-20 sm:w-24 block">
                                            <img class="w-20 max-h-16 object-cover rounded-xl" :src="product.img" alt="">
                                        </th>
                                        <th class=" py-4 w-20 sm:w-20 block">
                                            S/.{{ product.price }}
                                        </th>
                                        <th class="pe-5 w-20 py-4 sm:w-20 ">
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
                    <button class="text-white bg-blue-800 py-2 px-4 rounded-full">Pagar: S/.{{ totalPrice }}</button>
                </footer>
            </section>
        </aside>
    </section>
</template>

<style scoped>
.w-custom-open {
    width: 500px;
}

@media (max-width:640px){
    .w-custom-open{
        width: 400px;
    }
}
@media (max-width:410px){
    .w-custom-open{
        width: 300px;
    }
}
</style>