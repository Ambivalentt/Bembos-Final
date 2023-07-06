<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, computed, onBeforeUnmount } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper/core';
SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay]);
import 'swiper/swiper-bundle.css';

let swiperInstance = null;

const onSwiper = (swiper) => {
    swiperInstance = swiper;
};
const modules = [Navigation, Pagination, Scrollbar, Autoplay];

</script>

<template>
    <section class="w-full py-24 lg:py-44  ">
        <header class=" max-w-6xl mx-auto p-3">
            <div class="border-b-2 border-gray-700 pb-2 mb-4 flex">
                <h4 class="custom-font font-semibold text-xl sm:text-3xl">ELIGE TU MENÚ BEMBOS</h4>
            </div>
            <swiper :modules="modules" :slides-per-view="1" :autoplay="{ delay: 3000 }" :space-between="0"
                @swiper="onSwiper" @slideChange="onSlideChange" class="relative rounded-xl">
                <div class="absolute z-10 top-0 bottom-0 ms-5 flex items-center">
                    <button @click="swiperInstance.slidePrev()"
                        class="flex bg-black opacity-50 h-10 w-10 items-center justify-center rounded-full"><svg
                            xmlns="http://www.w3.org/2000/svg" height="1.4em" fill="#ffffff"
                            viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                        </svg></button>
                </div>

                <div class="absolute z-10 top-0 bottom-0 right-0 me-5 flex items-center">
                    <button @click="swiperInstance.slideNext()"
                        class="flex h-10 w-10 items-center justify-center rounded-full bg-black opacity-50"><svg
                            xmlns="http://www.w3.org/2000/svg" height="1.4em" fill="#ffffff"
                            viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                            <path
                                d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
                        </svg></button>
                </div>
                <swiper-slide>
                    <img src="../assets/menuSlider-1.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/MenuSlider-2.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/MenuSlider03.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/menuSlider-4.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/1686171834_1280x400-banner-yape-bb.webp" alt="">
                </swiper-slide>
            </swiper>
        </header>
        <main class="max-w-6xl mx-auto py-2 md:py-6 px-3">
            <section class="grid grid-cols-2 gap-4 md:gap-10">   
                <article class="flex flex-col items-center">
                    <header class="relative lg:w-full lg:h-full shadow-lg shadow-gray-400 rounded-xl">
                        <img class="w-full h-full object-contain rounded-xl" src="../assets/bg-article-1.webp" alt="">
                        <main class="absolute top-0 text-white text-xs sm:text-2xl md:text-3xl xl:text-4xl text-shadow ps-4 pt-2 custom-font">
                            PROMOCIONES EXCLUSIVAS WEB
                        </main>
                    </header>
                    <footer class=" pt-2.5 sm:pt-5">
                        <RouterLink to="/menu/combos"><button class="px-3 py-1 sm:px-14 md:py-2 lg:text-xl text-white font-bold bg-blue-700 rounded-full ">Ver todos</button></RouterLink>  
                    </footer>
                </article>
                <article class="flex flex-col items-center">
                    <header class="relative lg:w-full lg:h-full shadow-lg shadow-gray-400 rounded-xl">
                        <img class="w-full h-full object-contain rounded-xl" src="../assets/bg-article-2.webp" alt="">
                        <main class=" absolute top-0 text-white text-xs sm:text-2xl md:text-3xl xl:text-4xl text-shadow ps-4 pt-2 custom-font">
                            HAMBURGUESAS
                        </main>
                    </header>
                    <footer class="pt-2.5 sm:pt-5">
                      <RouterLink to="/menu/hamburguesas"><button class="px-3 py-1 sm:px-14 md:py-2 lg:text-xl text-white font-bold bg-blue-700 rounded-full ">Ver todos</button></RouterLink>  
                    </footer>
                </article>
                <article class="flex flex-col items-center">
                    <header class="relative lg:w-full lg:h-full shadow-lg shadow-gray-400 rounded-xl">
                        <img class="w-full h-full object-contain rounded-xl" src="../assets/bg-article-3.webp" alt="">
                        <main class="absolute top-0 text-white text-shadow text-xs sm:text-2xl md:text-3xl xl:text-4xl ps-4 pt-2 custom-font">
                            POLLO
                        </main>
                    </header>
                    <footer class="pt-2.5 sm:pt-5">
                        <RouterLink to="/menu/hamburguesasPollo"><button class="px-3 py-1 sm:px-14 md:py-2 lg:text-xl text-white font-bold bg-blue-700 rounded-full ">Ver todos</button></RouterLink>  
                    </footer>
                </article>
                <article class="flex flex-col items-center">
                    <header class="relative lg:w-full lg:h-full shadow-lg shadow-gray-400 rounded-xl">
                        <img class="w-full h-full object-contain rounded-xl" src="../assets/bg-article-4.webp" alt="">
                        <main class="absolute top-0 text-white text-xs sm:text-2xl md:text-3xl xl:text-4xl text-shadow ps-4 pt-2 custom-font">
                            LONCHERITA
                        </main>
                    </header>
                    <footer class="pt-2.5 sm:pt-5">
                        <button class="px-3 py-1 sm:px-14 md:py-2 lg:text-xl text-white font-bold bg-blue-700 rounded-full ">Ver todos</button>
                    </footer>
                </article>
            </section>
        </main>
    </section>
    <RouterView />
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

.custom-font {
    font-family: 'PT Sans Narrow', sans-serif;
}

.text-shadow{
    text-shadow: -2px -4px 0 #d90f06, -4px -3px 0 #d90f06, -4px -2px 0 #d90f06, -4px -1px 0 #d90f06, -4px 0 0 #d90f06, -4px 1px 0 #d90f06, -4px 2px 0 #d90f06, -4px 3px 0 #d90f06, -4px 4px 0 #d90f06, -3px -4px 0 #d90f06, -3px -3px 0 #d90f06, -3px -2px 0 #d90f06, -3px -1px 0 #d90f06, -3px 0 0 #d90f06, -3px 1px 0 #d90f06, -3px 2px 0 #d90f06, -3px 3px 0 #d90f06, -3px 4px 0 #d90f06, -2px -4px 0 #d90f06, -2px -3px 0 #d90f06, -2px -2px 0 #d90f06, -2px -1px 0 #d90f06, -2px 0 0 #d90f06, -2px 1px 0 #d90f06, -2px 2px 0 #d90f06, -2px 3px 0 #d90f06, -2px 4px 0 #d90f06, -1px -4px 0 #d90f06, -1px -3px 0 #d90f06, -1px -2px 0 #d90f06, -1px -1px 0 #d90f06, -1px 0 0 #d90f06, -1px 1px 0 #d90f06, -1px 2px 0 #d90f06, -1px 3px 0 #d90f06, -1px 4px 0 #d90f06, 0 -4px 0 #d90f06, 0 -3px 0 #d90f06, 0 -2px 0 #d90f06, 0 -1px 0 #d90f06, 0 0 0 #d90f06, 0 1px 0 #d90f06, 0 2px 0 #d90f06, 0 3px 0 #d90f06, 0 4px 0 #d90f06, 1px -4px 0 #d90f06, 1px -3px 0 #d90f06, 1px -2px 0 #d90f06, 1px -1px 0 #d90f06, 1px 0 0 #d90f06, 1px 1px 0 #d90f06, 1px 2px 0 #d90f06, 1px 3px 0 #d90f06, 1px 4px 0 #d90f06, 2px -4px 0 #d90f06, 2px -3px 0 #d90f06, 2px -2px 0 #d90f06, 2px -1px 0 #d90f06, 2px 0 0 #d90f06, 2px 1px 0 #d90f06, 2px 2px 0 #d90f06, 2px 3px 0 #d90f06, 2px 4px 0 #d90f06, 3px -4px 0 #d90f06, 3px -3px 0 #d90f06, 3px -2px 0 #d90f06, 3px -1px 0 #d90f06, 3px 0 0 #d90f06, 3px 1px 0 #d90f06, 3px 2px 0 #d90f06, 3px 3px 0 #d90f06, 3px 4px 0 #d90f06, 4px -4px 0 #d90f06, 4px -3px 0 #d90f06, 4px -2px 0 #d90f06, 4px -1px 0 #d90f06, 4px 0 0 #d90f06, 4px 1px 0 #d90f06, 4px 2px 0 #d90f06, 4px 3px 0 #d90f06, 4px 4px 0 #d90f06;
}
</style>