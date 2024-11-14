<script setup lang="ts">

</script>

<template>
    <section class="primary-header" id="primary-header">
        <div class="vlada-container md:mt-20 2xl:mb-28">
            <div class="bg-vlada-color-7 rounded-2xl md:px-7 2xl:min-h-[679px] max-h-[679px] flex justify-between">
                <div class="relative w-1/2 hidden 2xl:block">
                    <NuxtImg src="/images/primary-header-clicker-app-image.svg" data-aos="fade-right" data-aos-duration="500" data-aos-delay="100"
                             class="absolute md:left-28 h-full scale-110 select-none pointer-events-none" alt="Изображение заголовка кликер-приложения"/>
                </div>
                <div class="relative w-full 2xl:w-1/2">
                    <button data-aos="fade-in" data-aos-duration="500"
                        class="hidden  2xl:block bg-vlada-color-4 absolute right-0 -top-8 rounded-full border-4 border-white py-6 px-9 text-white text-2xl uppercase italic font-bold">
                        Получить консультацию бесплатно
                    </button>
                    <div class="relative 2xl:mt-24">
                        <div class="flex justify-center 2xl:justify-start w-full pt-5">
                            <h1 class="text-base md:text-5xl font-medium" data-aos="fade-left" data-aos-duration="500">Готовый <span
                                class="uppercase font-extrabold text-6xl md:text-8xl italic">web app</span><br>
                                <span class="md:pl-20 font-extrabold text-6xl md:text-8xl italic">Кликер</span>
                                <br>За 10 минут
                            </h1>
                        </div>
                        <div class="mt-5 px-4 pb-5 2xl:pb-0 md:px-28 w-full text-center 2xl:text-left overflow-hidden">
                            <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" class="text-vlada-color-9 text-xl md:text-3xl font-bold md:line-clamp-2">Получите готовую копию кликера,
                                магазина
                                или пирамиды за 10 минут.</h2>
                            <h2 data-aos="fade-up" data-aos-duration="500" data-aos-delay="200" class="text-vlada-color-9 text-xl md:text-3xl mt-2 md:mt-6 font-bold md:line-clamp-2">Мы запустим для
                                вас mini-app, а так
                                же модифицируем под ваши нужды.</h2>
                        </div>
                        <div class="w-full hidden items-end justify-end mt-14 2xl:flex">
                            <button data-aos="zoom-in" data-aos-delay="300" data-aos-duration="500" class="text-3xl font-bold text-white bg-vlada-color-8 py-4 px-48 rounded-full">
                                Получить
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex 2xl:hidden py-3 mb-6 md:mb-10 flex-col gap-3">
                <button
                    class="text-xl md:text-2xl italic font-bold text-white bg-vlada-color-8 py-4 rounded-2xl w-full">
                    Получить
                </button>
                <button
                    class="text-xl md:text-2xl italic font-bold text-white bg-vlada-color-3 py-4 rounded-2xl w-full">
                    Бесплатная консультация
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>

</style>
