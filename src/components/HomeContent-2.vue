<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar]);
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

let swiperInstance = null;

const onSwiper = (swiper) => {
    swiperInstance = swiper;
};

const onSlideChange = () => {
    console.log('slide change');
};
const slidesPerView = ref(0)
const spacePerView = ref(0)
const changeSlidesPerView = () => {
    if (window.innerWidth < 440) {
        spacePerView.value = 0
        slidesPerView.value = 2
    } else if (window.innerWidth < 600) {
        slidesPerView.value = 2;
    } else if (window.innerWidth < 1025) {
        slidesPerView.value = 3;
    } else {
        slidesPerView.value = 4;
    }

}

changeSlidesPerView()
window.addEventListener('resize', changeSlidesPerView);
</script>

<template>
    <section class="w-full mx-auto py-4 md:py-14     bg-gray-100 h-full">
        <header class="flex justify-between max-w-7xl mx-auto px-4 lg:px-2 ">
            <h3 class="font-semibold text-2xl sm:text-3xl custom-font tracking-widest">MENÚ DE HAMBURGUESAS ONLINE
            </h3>
            <div class="gap-4 justify-center hidden md:flex">
                <button @click="swiperInstance.slidePrev()"><svg xmlns="http://www.w3.org/2000/svg" height="1.4em"
                        viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                    </svg></button>
                <button @click="swiperInstance.slideNext()"><svg xmlns="http://www.w3.org/2000/svg" height="1.4em"
                        viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                        <path
                            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                    </svg></button>
            </div>
        </header>
        <main class="max-w-7xl mx-auto">
            <swiper :modules="modules" :slides-per-view="slidesPerView" :space-between="spacePerView" @swiper="onSwiper"
                @slideChange="onSlideChange">
                <swiper-slide class="p-4 ">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-whiterounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/promociones-bembos-delivery1.jpg" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6 ">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Promociones Exclusivas
                                    Web</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <button
                                        class="bg-blue-800 text-white w-56 mx-3 h-10 sm:w-64 sm:h-10  rounded-full font-bold custom-font text-xl">Ver
                                        Todos</button>
                                </footer>

                            </main>
                        </article>
                    </section>
                </swiper-slide>
                <swiper-slide class="p-4">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/hamburguesas_2.jpg" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Hamburguesas</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <RouterLink to="/menu/hamburguesas"
                                        class="bg-blue-800 text-white mx-2.5 w-56 md:w-56 lg:w-60  text-center py-1.5 rounded-full font-bold custom-font text-xl">
                                        <button class="w-full ">Ver Todos</button></RouterLink>
                                </footer>

                            </main>
                        </article>
                    </section>
                </swiper-slide>
                <swiper-slide class="p-4">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/pollo_2.jpg" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Pollo</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <RouterLink to="/menu/HamburguesasPollo"
                                        class="bg-blue-800 text-white mx-2.5 w-56 md:w-56 lg:w-60  text-center py-1.5 rounded-full font-bold custom-font text-xl">
                                        <button class="w-full ">Ver Todos</button></RouterLink>
                                </footer>

                            </main>
                        </article>
                    </section>
                </swiper-slide>
                <swiper-slide class="p-4">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/loncheritas_1.jpg" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Loncheritas</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <button
                                        class="bg-blue-800 text-white w-56 mx-3 h-10 sm:w-64 sm:h-10  rounded-full font-bold custom-font text-xl">Ver
                                        Todos</button>
                                </footer>

                            </main>
                        </article>
                    </section>
                </swiper-slide>
                <swiper-slide class="p-4">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/complementos_1.jpg" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Complementos</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <button
                                        class="bg-blue-800 text-white w-56 mx-3 h-10 sm:w-64 sm:h-10  rounded-full font-bold custom-font text-xl">Ver
                                        Todos</button>
                                </footer>

                            </main>
                        </article>
                    </section>
                </swiper-slide>
                <swiper-slide class="p-4">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/500x669-gaseosas.webp" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Bebidas</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <RouterLink to="/menu/bebidas"
                                        class="bg-blue-800 text-white mx-2.5 w-56 md:w-56 lg:w-60  text-center py-1.5 rounded-full font-bold custom-font text-xl">
                                        <button class="w-full ">Ver Todos</button></RouterLink>
                                </footer> 

                            </main>
                        </article>
                    </section>
                </swiper-slide>
                <swiper-slide class="p-4">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/500x669-mini-princesa.jpg" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Helados</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <button
                                        class="bg-blue-800 text-white w-56 mx-3 h-10 sm:w-64 sm:h-10  rounded-full font-bold custom-font text-xl">Ver
                                        Todos
                                    </button>
                                </footer>
                            </main>
                        </article>
                    </section>
                </swiper-slide>
                <swiper-slide class="p-4">
                    <section class="h-full w-full shadow-lg shadow-slate-400">
                        <article class="height-custom bg-white shadow-lg rounded-xl">
                            <header class="flex custom-h-1  overflow-hidden rounded-t-xl">
                                <img class="h-full w-full hover:scale-110 max-w-4xl object-cover duration-500 transition-transform"
                                    src="../assets/500x669-inka-chips-1.webp" alt="">
                            </header>
                            <main class="flex py-2 rounded-b-xl bg-white flex-col gap-x-6 ">
                                <h2 class="text-base  sm:text-2xl custom-font font-bold text-center">Inka Chips</h2>

                                <footer class="pt-2 flex w-full justify-center">
                                    <button
                                        class="bg-blue-800 text-white w-56 mx-3 h-10 sm:w-64 sm:h-10  rounded-full font-bold custom-font text-xl">Ver
                                        Todos</button>
                                </footer>

                            </main>
                        </article>
                    </section>
                </swiper-slide>
            </swiper>
        </main>
    </section>
    <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

.custom-font {
    font-family: 'PT Sans Narrow', sans-serif;
}

.custom-font {
    font-family: 'PT Sans Narrow', sans-serif;
}

.custom-h-1 {
    height: 80%;
}

.height-custom {
    height: 28em;
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

.router-link-active {
    border-bottom: red 3px solid;
}
</style>