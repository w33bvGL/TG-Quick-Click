<template>
    <section class="section vlada-container">
        <div class="flex flex-col justify-center items-center xl:flex-row xl:items-start">
            <h3 data-aos="fade-right" data-aos-duration="500"
                class="xl:mr-[90px] min-w-max text-[24px] text-white md:text-black md:text-[40px] font-medium">
                Готовый продукт
            </h3>
            <div class="items-start flex flex-col lg:flex-row w-full px-[45px] xl:px-0 justify-between">
                <div data-aos="zoom-in" data-aos-duration="500" data-aos-delay="100"
                     class="w-full justify-center grid grid-cols-3 gap-y-[40px] gap-x-[60px] lg:w-[40%]">
                    <div
                        class=" lg:max-w-[62px]"
                        v-for="item in services"
                        :key="item.num"
                    >
                        <span
                            class="font-medium font-futur-regular text-white md:text-black text-[56px] lg:text-[90px]">{{
                                item.num
                            }}.</span>
                        <p class="md:text-[20px] font-medium text-white md:text-black text-[15px]">{{ item.text }}</p>
                    </div>
                </div>
                <div class="w-full lg:w-1/2 mt-2 lg:mt-0">
                    <NuxtImg data-aos="fade-left" data-aos-duration="500" data-aos-delay="100"
                             class="hidden lg:block w-[687px] h-[866px] object-cover"
                             src="/images/completed-product-component-image.png"
                             alt="Изображение готового продукта нашего сайта" loading="lazy"/>
                    <NuxtImg data-aos="fade-left" data-aos-duration="500" data-aos-delay="100"
                             class="block lg:hidden w-full"
                             src="/images/we-offer-clicker-app-image.svg"
                             alt="Изображение готового продукта нашего сайта" loading="lazy"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const services = [
    {num: "01", text: "Быстрая работа"},
    {num: "02", text: "Продуманный дизайн"},
    {num: "03", text: "UI кит"},
    {num: "04", text: "Проверенный функционал"},
    {num: "05", text: "Поддержка всех устройств"},
];
</script>
