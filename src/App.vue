<script setup>
import Header from './components/Header.vue';
import FooterMenu from './components/FooterMenu.vue';
import carrito from './components/carrito.vue';
import { ref,inject, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
const cardMenu = ref(false)

const globalData = inject('globalData') 
const lengthProducts = ref(globalData.value.productosComprados.length)

watch(() => globalData.value.productosComprados.length, (newLength) => {
  lengthProducts.value = newLength;
})

//abrri carrito
const carritoStatus = inject('carritoStatus');

const openCard = () =>{
  carritoStatus.value = true
}
</script>

<template>
  <header class="w-full fixed z-30">
    <section class=" h-20 w-full bg-white border-b border-gray-400 lg:bg-blue-900 px-0 xl:px-0">
      <Header />
    </section>
    <section class="w-full bg-white shadow-xl px-5 xl:px-0">
      <nav class="hidden justify-between max-w-6xl mx-auto items-center py-3 lg:flex">
        <ul class="flex text-blue-900 gap-20 font-bold text-xl tracking-tighter ">
          <li>
            <RouterLink to="/menu">MENÚ</RouterLink>
          </li>
          <li>
            <RouterLink to="/promociones">PROMOCIONES</RouterLink>
          </li>
          <li>
            <RouterLink to="/locales">LOCALES</RouterLink>
          </li>
          <li>
            <RouterLink to="/nosotros">NOSOTROS</RouterLink>
          </li>
        </ul>
        <section class="flex gap-10">
          <div class="bg-yellow-300 flex w-52 rounded-full px-3 items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-10 h-10 bg-bembos">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
            </svg>

            <p class="bg-bembos font-semibold tracking-tighter text-center">Pide en tiendas <span
                class="text-red-600 font-bold">SIN
                COLAS</span></p>
          </div>
          <div class="bg-yellow-300 rounded-full px-4 relative" @click="openCard">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="w-12 h-12 bg-bembos">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
            <div class="bg-red-600 text-white absolute -top-2 right-0 rounded-full px-2 font-bold">
              <p>{{ lengthProducts }}</p>
            </div>
          </div>
        </section>
      </nav>
    </section>
  </header>
  <carrito/>
  <RouterView/>
<FooterMenu/>
</template>

<style scoped>
.ocultar{
  display: none !important;
}
.bg-bembos {
  color: #21388b;
}
.router-link-active{
  border-bottom: red 3px solid;
}
li:hover{
  transform: translateY(-2px);
  transition: all 0.2s ease;
}
li>:hover{
  border-bottom: red solid;
  transform: translateY(4px);
  transition: all 0.2s ease-in-out;
}

</style>
