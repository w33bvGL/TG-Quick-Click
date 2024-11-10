<script setup lang="ts">
import {ref} from 'vue';
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/swiper-bundle.css';

const categories = ref(['Все', 'Кликер', 'P2E', 'Функциональные']);
const activeCategory = ref('Все');
const allSlides = ref([
    {title: 'Kurilian Bobtail', category: 'Кликер', imageUrl: "kurilian-bobtail-one", bgColor: '11'},
    {title: 'Clicker', category: 'Кликер', imageUrl: "clicker-one", bgColor: '11'},
    {title: 'Creative brain', category: 'Кликер', imageUrl: "creative-brain-one", bgColor: '11'},
    {title: 'Top Friends', category: 'P2E', imageUrl: "top-friends-one", bgColor: '10'},
    {title: 'Hilton', category: 'P2E', imageUrl: "hilton-one", bgColor: '10'},
    {title: 'Creative brain', category: 'P2E', imageUrl: "creative-brain-two", bgColor: '10'},
    {title: 'Kurilian Bobtail', category: 'Функциональные', imageUrl: "kurilian-bobtail-two", bgColor: '11'},
    {title: 'Kurilian Bobtail', category: 'Функциональные', imageUrl: "kurilian-bobtail-three", bgColor: '11'},
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
                            slidesPerView: 2,
                            spaceBetween: 80,
                        },
                    }"
                >
                    <swiper-slide v-for="(item, index) in filteredSlides" :key="index" class="w-[600px]">
                        <div class="px-[29px] py-[43px] rounded-[30px] flex justify-between relative aspect-square"
                             :class="`bg-vlada-color-${item.bgColor}`">
                            <div class="h-full flex flex-col justify-between absolute top-0 py-10">
                                <h5 class="text-white md:text-[32px] text-nowrap">{{ item.title }}</h5>
                                <button
                                    class="cursor-pointer bg-white text-black px-10 py-2 rounded-3xl text-base md:text-xl bg-opacity-80 transition-opacity">
                                    {{ item.category }}
                                </button>
                            </div>
                            <div class="w-full h-full flex justify-center p-20">
                                <NuxtImg class="h-full scale-125"
                                         :src="'/images/case/' + item.imageUrl + '.png'"></NuxtImg>
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

