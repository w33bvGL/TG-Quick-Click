<script setup lang="ts">
import {useRuntimeConfig} from '#app'

const config = useRuntimeConfig();

const navLinks = [
    {to: "/", title: "Услуги"},
    {to: "/", title: "Кейсы"},
    {to: "/", title: "Кликеры"},
    {to: "/", title: "Mini-games"},
    {to: "/", title: "Связаться"}
];

const mobileNavLinks = [
    {to: "/", title: "написать"}
];

const socialLinks = [
    {to: config.public.appTelegram, title: "Телеграм", icon: "mdi:telegram"},
    {to: `tel:${config.public.appPhone}`, title: "Телефон", icon: "ion:ios-telephone"},
]
</script>

<template>
    <header class="header py-2" id="header">
        <div class="vlada-container">
            <div
                class="px-2 py-2 md:bg-vlada-color-1 rounded-2xl flex gap-2  justify-between md:justify-between items-center">
                <div class="w-full hidden md:flex">
                    <!-- тут видио имя или лого сайта )) -->
                </div>
                <div class="w-full hidden md:flex gap-3 text-2xl justify-center">
                    <a href="#" class="py-1 text-nowrap" v-for="data in navLinks" :key="data.to">{{ data.title }}</a>
                </div>
                <div class="w-full flex md:hidden">
                    <a v-for="data in mobileNavLinks" href="#"
                       class="py-1 px-2 rounded-2xl bg-vlada-color-3">{{ data.title }}</a>
                </div>
                <div class="w-full flex items-center justify-end gap-3">
                    <UiButton v-for="data in socialLinks" :key="data.to" type="tertiary" :to="data.to"
                              :icon="data.icon"/>
                </div>
            </div>
        </div>
    </header>
</template>
