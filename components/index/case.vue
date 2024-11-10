<script setup lang="ts">
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const categories = ref(['Все', 'Кликеры', 'P2E', 'Функциональные']);

const allSlides = ref([
    {title: 'Slide 1', category: 'Кликеры'},
    {title: 'Slide 2', category: 'Кликеры'},
    {title: 'Slide 3', category: 'P2E'},
    {title: 'Slide 4', category: 'P2E'},
    {title: 'Slide 5', category: 'Функциональные'},
    {title: 'Slide 6', category: 'Функциональные'},
    {title: 'Slide 7', category: 'Кликеры'},
    {title: 'Slide 8', category: 'P2E'},
    {title: 'Slide 9', category: 'Функциональные'},
    {title: 'Slide 10', category: 'Кликеры'},
    {title: 'Slide 11', category: 'P2E'},
    {title: 'Slide 12', category: 'Функциональные'},
    {title: 'Slide 13', category: 'Кликеры'},
    {title: 'Slide 14', category: 'P2E'},
    {title: 'Slide 15', category: 'Функциональные'},
]);

const filteredSlides = ref([...allSlides.value.slice(0, 10)]);

function filterByCategory(category: string) {
    if (category === 'Все') {

        filteredSlides.value = allSlides.value.slice(0, 10);
    } else {

        filteredSlides.value = allSlides.value
            .filter((slide) => slide.category === category)
            .slice(0, 10);
    }
}
</script>

<template>
    <section class="case bg-vlada-color-4 rounded-2xl mb-[60px] md:mb-32" id="case">
        <div class=" vlada-container pt-12 pb-32">
            <div class="2xl:pl-72">
                <h3 class="text-white text-left text-3xl md:text-5xl">Наши кейсы:</h3>
              
                <div class="mt-5 flex flex-wrap gap-3 mb-5">
                    <button class="cursor-pointer bg-white text-black px-10 py-2 bg-opacity-50 rounded-3xl text-base md:text-xl"
                            v-for="cat in categories" :key="cat" @click="filterByCategory(cat)">
                        {{ cat }}
                    </button>
                </div>

                <swiper :slides-per-view="3" :space-between="10">
                    <swiper-slide v-for="(item, index) in filteredSlides" :key="index">
                        <div class="slide-content">
                            {{ item.title }}
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>
