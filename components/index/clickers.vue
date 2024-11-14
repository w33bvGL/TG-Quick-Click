<template>
    <section class="section-4 relative vlada-container hidden xl:block" id="clickers">
        <div class="relative bg-ms-color-10 px-[80px] py-[100px] pb-52 flex gap-[30px] rounded-tl-none rounded-[30px] ">
            <div
                class="header-title absolute -top-16 left-0 px-5 py-2 bg-ms-color-10 text-black rounded-t-2xl font-bold text-xl">
                <div class="relative">
                    <div class="absolute -z-10 overflow-hidden right-[-40px] bottom-[-76px] bg-ms-color-10 w-10 h-10">
                        <div class="relative">
                            <div class="absolute w-10 h-10 -top-[20px] -right-[20px] rounded-full bg-white"></div>
                        </div>
                    </div>
                </div>
                <h3 class="text-5xl font-medium" data-aos="zoom-in" data-aos-duration="500">Кликеры</h3>
            </div>
            <div class="flex gap-10 font-futur-regular items-start w-full" v-for="item in options" :key="item.id">
                <NuxtImg data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100" class="pointer-events-none select-none min-w-[247px]" :src="`/icons/${item.imageUrl}`" :alt="item.imageAlt"/>
                <div class="overflow-hidden">
                    <h4 data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" class="font-bold text-[40px]">
                        0{{ item.num }}
                    </h4>
                    <div class="s4-title font-medium text-[40px] mb-[50px] ">
                        <h5 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300">{{ item.title }}</h5>
                    </div>
                    <div class="md:text-[20px]" data-aos="fade-up" data-aos-duration="500" data-aos-delay="400"><p>{{ item.text }}</p></div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const options = [
    {
        num: "1",
        imageUrl: "s4-logo1.png",
        imageAlt: "Продуманный функционал",
        title: "Продуманный функционал",
        text: "Детально проработанный функционал с уникальной системой прокачки и продуманной реферальной системой",
    },
    {
        num: "2",
        imageUrl: "s4-logo2.png",
        imageAlt: "Гибкость модификаций",
        title: "Гибкость модификаций",
        text: "Система разработанная максимально оптимизированным способом, позволяющим моментально и без проблем вносить любые модификации",
    },
];
</script>
