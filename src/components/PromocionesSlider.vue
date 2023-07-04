<script setup>
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
        <header class=" max-w-4xl mx-auto p-3">
            <div class="border-b-2 border-gray-700 pb-2 mb-4 flex">
                <h4 class="custom-font font-semibold text-xl sm:text-3xl">DISFRUTA DE NUESTRAS PROMOCIONES BEMBOS</h4>
            </div>
            <swiper :modules="modules" :slides-per-view="1" :autoplay="{ delay: 3000 }" :space-between="0" pagination
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
                    <img src="../assets/1687457355_1280x400-duo-queso-tocino-julio-nuevo.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/1687445072_1280x400-chocomani-julio.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/1686171834_1280x400-banner-yape-bb.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/menuSlider-4.webp" alt="">
                </swiper-slide>
                <swiper-slide>
                    <img src="../assets/1687443551_julio-duo-a-lo-pobre-1280x400.webp" alt="">
                </swiper-slide>
            </swiper>
        </header>
        <main class="max-w-4xl mx-auto p-3 my-5">
            <header class="mb-7">
                <h3 class="text-blue-800 font-bold text-3xl custom-font">Elige cómo disfrutarás tu promo</h3>
            </header>
            <main class="flex flex-col gap-4">
                <section class="flex gap-4 flex-col sm:flex-row">
                    <article>
                        <img class="rounded-xl" src="../assets/SECTION3.webp" alt="">
                    </article>
                    <article>
                        <img class="rounded-xl" src="../assets/SECTION2.webp" alt="">
                    </article>
                </section>
                <section class="">
                    <img class="rounded-xl w-full" src="../assets/SECTION1.webp" alt="">
                </section>
            </main>
        </main>
    </section>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=PT+Sans+Narrow&display=swap');

.custom-font {
    font-family: 'PT Sans Narrow', sans-serif;
}

</style>