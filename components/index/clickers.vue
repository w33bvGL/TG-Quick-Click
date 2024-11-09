<template>
    <section class="section-4 relative">
        <div class="container relative bg-ms-color-10 py-[100px] flex gap-[30px] rounded-tl rounded-[30px]">
            <div class="header-title absolute -top-16 left-0 px-5 py-2 bg-ms-color-10 text-black rounded-t-2xl font-bold text-xl">
                <div class="relative">
                    <div class="absolute -z-10 overflow-hidden right-[-59px] bottom-[-56px] bg-ms-color-10 w-10 h-10">
                        <div class="relative">
                            <div class="absolute w-20 h-20 -top-[49px] -right-[49px] rounded-full bg-white scale-125"></div>
                        </div>
                    </div>
                </div>
                <h3 class="text-5xl">Кликеры</h3>
            </div>
            <div class="s4-blocks flex font-futur-regular items-start" v-for="item in options" :key="item.id">
                <img :src="`/icons/${item.url}`" alt=""/>
                <div class="s4-block-two px-[60px] w-[512px]">
                    <h4 class="s4-h4 font-medium text-[40px]">
                        {{ item.num }}
                    </h4>
                    <div class="s4-title font-medium text-[40px] mb-[50px] w-[100px]">
                        {{ item.title }}
                    </div>
                    <div class="s4-text text-[20px] w-[454px]">{{ item.text }}</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
const options = [
    {
        url: "s4-logo1.png",
        num: "01",
        title: "Продуманный функционал",
        text: "Детально проработанный функционал с уникальной системой прокачки и продуманной реферальной системой",
    },
    {
        url: "s4-logo2.png",
        num: "02",
        title: "Гибкость модификаций",
        text: "Система разработанная максимально оптимизированным способом, позволяющим моментально и без проблем вносить любые модификации",
    },
];
</script>

<style>
</style>
