<script setup>
import { ref,inject } from 'vue'
import NavbarPhone from './NavbarPhone.vue'
import carrito from './carrito.vue';
const selected = ref('lima')
const closeAside = ref(true)
const globalData = inject('globalData')

const closeAsideBtn = () => {
  setTimeout(()=>{
    closeAside.value = true
  }, 200)
}

const bembosLogo = ref(false)

const openModalbtn = () => {
  closeAside.value = false
  setTimeout(() => {
    bembosLogo.value = true
  }, 300)
}

const phonemodal = ref(false);

const openModalPhone = () =>{
  phonemodal.value == false ? phonemodal.value = true : phonemodal.value = false;
}

// const reloadPage = () =>{
//  setTimeout( ()=>{
//    900
//    window.location.reload();
//  })
//}



</script>

<template>
  <header class="max-w-6xl flex mx-auto justify-between items-center h-full gap-x-2 sm:gap-x-0 relative ">
    <section class="w-24 sm:w-36">
      <RouterLink class="hidden lg:block" to="/" exact-active-class=""><img src="../assets/fotor_2023-5-26_10_5_7.png" alt=""></RouterLink>
      <RouterLink class="lg:hidden" to="/"><img src="../assets/Bembos_logo15.png" alt=""></RouterLink>

    </section>
    <section class="bg-yellow-300 flex w-28 sm:w-44 rounded-full px-0.5 sm:px-3 items-center lg:hidden">
      <p class="text-bembos font-semibold tracking-tighter text-center text-xs sm:text-base">Pide en tiendas <span
          class="text-red-600 font-extrabold">SIN
          COLAS</span></p>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-12 h-12 md:w-14 md:h-14 text-bembos">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    </section>
    <section class="flex items-center gap-x-0  lg:gap-x-4">
      <div class="flex gap-x-3 md:gap-x-6 items-center">
        <svg @click="openModalPhone"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.9" stroke="currentColor"
          class="w-8 h-8 sm:h-12 sm:w-12 text-blue-900 lg:text-white">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>

        <svg xmlns="http://www.w3.org/2000/svg" @click="openModalbtn" fill="none" viewBox="0 0 24 24" stroke-width="2.5"
          stroke="currentColor" class="w-8 h-8 sm:w-12 sm:h-12 lg:hidden text-blue-900">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>


      </div>
      <div class="hidden lg:block">
        <div class="flex items-center text-yellow-400 font-bold">
          <p>Delivery</p>
          <select v-model="selected"
            class="bg-transparent border-none text-white text-xs font-bold w-auto ms-2 ps-1 flex">
            <option class="text-black font-bold p-0 m-0" value="lima">LIMA</option>
            <option class="text-black font-bold p-0 m-0" value="huancayo">HUANCAYO</option>
          </select>
        </div>
        <div class="text-white font-semibold text-2xl">
          <p v-if="selected === 'lima'">014191919</p>
          <p v-else-if="selected === 'huancayo'">064-601999</p>
        </div>
      </div>
      <div>
      </div>
    </section>
  </header>

  <!--NAVBAR MODAL-->
  <aside class="fixed z-50 top-0 left-0 bg-bembos max-w-sm w-full h-full"
    :class="{ 'close-aside': closeAside == true }, { 'opacity-0': closeAside == true }" >
    <section class="p-4">
      <header class="flex justify-between pb-20 items-center">
        <div class="w-40">
          <RouterLink to="/"><img v-if="bembosLogo" :class="{ 'w-30': bembosLogo == true }" src="../assets/fotor_2023-5-26_10_5_7.webp"  @click="closeAsideBtn" alt=""></RouterLink>
        </div>
        <div class="pb-3">
          <p class="text-7xl text-white" @click="closeAsideBtn" v-show="!closeAside">&times;</p>
        </div>
      </header>
      <main class="">
        <ul :class="{'hidden': closeAside  == true}" class="flex flex-col text-white gap-8 font-bold text-3xl tracking-tighter items-center">
          <li>
            <RouterLink  to="/menu" @click="closeAsideBtn" >MENÚ</RouterLink>
          </li>
          <li>
            <RouterLink to="/promociones" @click="closeAsideBtn">PROMOCIONES</RouterLink>
          </li>
          <li>
            <RouterLink to="/locales" @click="closeAsideBtn">LOCALES</RouterLink>
          </li>
          <li>
            <RouterLink to="/nosotros" @click="closeAsideBtn">NOSOTROS</RouterLink>
          </li>
        </ul>
      </main>
      <footer>
        <section class="flex gap-4 justify-center my-16"> <!--ICONOS-->
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="2.6em" viewBox="0 0 512 512">
            <path
              d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
          </svg>
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="2.7em" viewBox="0 0 576 512">
            <path
              d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z" />
          </svg>
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="2.7em" viewBox="0 0 512 512">
            <path
              d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z" />
          </svg>
          <svg fill="white" xmlns="http://www.w3.org/2000/svg" height="2.7em" viewBox="0 0 448 512">
            <path
              d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
          </svg>
        </section>
      </footer>
    </section>
  </aside>
<NavbarPhone id="modalPhone" class="opacity-0 h-56 w-full -translate-y-80 " :class="{'translate-y-0': phonemodal == true }, {'opacity-100': phonemodal == true}" />
<carrito/>
</template>

<style scoped>
.bg-bembos {
  background-color: #21388b;
}
.text-bembos {
  color: #21388b;
}
aside {
  transition: 0.40s ease-in-out;

}

.close-aside {
  max-width: 0;
}
#modalPhone{
  transition: 0.30s  ease-in-out;
}

.router-link-active{
  color: goldenrod;
}
</style>