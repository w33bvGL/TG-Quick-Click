<script setup lang="ts">
import {useRuntimeConfig} from '#app'

const config = useRuntimeConfig();

const socialLinks = [
    {to: config.public.appTelegram, title: "Телеграм", icon: "mdi:telegram"},
    {to: config.public.appVK, title: "Вканатакте", icon: "bx:bxl-vk"},
]

const phoneLink = [
    {to: `tel:${config.public.appPhone}`, title: "+7 800 555 35 35",}
]

const emailLink = [
    {to: `mailto:${config.public.appEmail}`, title: "mail@mail.com",}
]
</script>

<template>
    <footer class="footer bg-vlada-color-6 md:bg-vlada-color-4 rounded-t-2xl" id="footer">
        <div
            class="vlada-container pt-4 md:py-12 flex flex-col gap-5 lg:gap-3 lg:flex-row justify-between items-center">
            <div>
                <h3 class="text-white text-2xl md:text-5xl">Связаться</h3>
            </div>
            <div class="flex gap-5 flex-row flex-wrap justify-center items-center">
                <div class="bg-vlada-color-5 p-5 rounded-2xl">
                    <p class="text-sm md:text-2xl text-white">Соцсети</p>
                    <div class="flex gap-2 mt-2">
                        <UiButton v-for="data in socialLinks" type="primary" :to="data.to" :icon="data.icon"/>
                    </div>
                </div>
                <div class="bg-vlada-color-5 p-5 rounded-2xl">
                    <p class="text-sm md:text-2xl text-white">Телефон</p>
                    <div class="flex gap-2 mt-2">
                        <UiButton v-for="data in phoneLink" type="secondary" :to="data.to">{{ data.title }}</UiButton>
                    </div>
                </div>
                <div class="bg-vlada-color-5 p-5 rounded-2xl">
                    <p class="text-sm md:text-2xl text-white">Почта</p>
                    <div class="flex gap-2 mt-2">
                        <UiButton v-for="data in emailLink" type="secondary" :to="data.to">{{ data.title }}</UiButton>
                    </div>
                </div>
            </div>
            <div>
                <p class="text-white">все права защищены лясем трясем</p>
            </div>
        </div>
    </footer>
</template>
