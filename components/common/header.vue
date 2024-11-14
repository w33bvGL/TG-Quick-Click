<script setup lang="ts">
import {useRuntimeConfig} from '#app'
import throttle from 'lodash/throttle';
import {ref, onMounted, onBeforeUnmount} from 'vue';

const config = useRuntimeConfig();

const navLinks = [
    {to: "#", title: "Главная"},
    {to: "#we-offer", title: "Услуги"},
    {to: "#case", title: "Кейсы"},
    {to: "#clickers", title: "Кликеры"},
    {to: "#mini-games", title: "Mini-games"},
    {to: "#order-a-service", title: "Связаться"}
];

const mobileNavLinks = [
    {to: "/", title: "написать"}
];

const socialLinks = [
    {to: config.public.appTelegram, title: "Телеграм", icon: "mdi:telegram"},
    {to: `tel:${config.public.appPhone}`, title: "Телефон", icon: "ion:ios-telephone"},
]

const headerClass = ref('header-default');

const handleScroll = throttle(() => {
    headerClass.value = window.scrollY > 100 ? 'bg-vlada-color-1 shadow-slate-100 ' : 'header-default';
}, 150);

const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (id === "#") {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>

<template>
    <header class="header py-2 sticky top-0 z-50 transition-all overflow-hidden" id="header" :class="headerClass">
        <div class="vlada-container">
            <div
                class="px-2 py-2 md:bg-vlada-color-1 rounded-2xl flex gap-2  justify-between md:justify-between items-center">
                <div class="w-full hidden md:flex">
                    <!-- тут имя или лого сайта )) -->
                </div>
                <div class="w-full hidden md:flex gap-5 text-2xl justify-center" data-aos="fade-in"
                     data-aos-duration="500" data-aos-once="true">
                    <a href="javascript:void(0)" class="py-1 text-nowrap" v-for="data in navLinks" :key="data.to"
                       @click="scrollToSection(data.to)">{{ data.title }}</a>
                </div>
                <div class="w-full flex md:hidden">
                    <a v-for="data in mobileNavLinks" href="javascript:void(0)"
                       class="py-1 px-2 rounded-2xl bg-vlada-color-3" @click="scrollToSection(data.to)">{{
                            data.title
                        }}</a>
                </div>
                <div class="w-full flex items-center justify-end gap-3" data-aos="fade-left" data-aos-duration="500"
                     data-aos-delay="100" data-aos-once="true">
                    <UiButton v-for="data in socialLinks" :key="data.to" type="tertiary" :to="data.to"
                              :icon="data.icon"/>
                </div>
            </div>
        </div>
    </header>
</template>
