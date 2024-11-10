<script setup lang="ts">
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const categories = ref(['Все', 'Кликер', 'P2E', 'Функциональные']);
const activeCategory = ref('Все');
const allSlides = ref([
    {title: 'Kurilian Bobtail', category: 'Кликер', bgColor: '11'},
    {title: 'Clicker', category: 'Кликер', bgColor: '11'},
    {title: 'Creative brain', category: 'Кликер', bgColor: '11'},
    {title: 'Top Friends', category: 'P2E', bgColor: '10'},
    {title: 'Hilton', category: 'P2E', bgColor: '10'},
    {title: 'Creative brain', category: 'P2E', bgColor: '10'},
    {title: 'Kurilian Bobtail', category: 'Функциональные', bgColor: '11'},
    {title: 'Kurilian Bobtail', category: 'Функциональные', bgColor: '11'},
]);

const filteredSlides = ref([...allSlides.value.slice(0, 10)]);

function filterByCategory(category: string) {
    activeCategory.value = category;
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
                    <button
                        :class="['cursor-pointer bg-white text-black px-10 py-2 rounded-3xl text-base md:text-xl bg-opacity-50 transition-opacity', {'button--active': activeCategory === cat}]"
                        v-for="cat in categories"
                        :key="cat"
                        @click="filterByCategory(cat)"
                    >
                        {{ cat }}
                    </button>
                </div>

                <swiper
                    :breakpoints="{
                        375: {
                            slidesPerView: 1,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }"
                >
                    <swiper-slide v-for="(item, index) in filteredSlides" :key="index">
                        <div class="px-[29px] py-[43px] flex justify-between" :class="`bg-vlada-color-${item.bgColor}`">
                            <div>
                                <h5 class="text-white md:text-[32px]">{{ item.title }}</h5>
                                <button
                                    class="cursor-pointer bg-white text-black px-10 py-2 rounded-3xl text-base md:text-xl bg-opacity-80 transition-opacity">
                                    {{ item.category }}
                                </button>
                            </div>
                            <div>
                                wd
                            </div>
                        </div>
                        
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </section>
</template>

<style scoped>
.button--active {
    @apply bg-opacity-100;
}
</style>

