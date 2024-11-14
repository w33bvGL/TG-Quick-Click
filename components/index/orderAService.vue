<script setup lang="ts">
import {ref} from 'vue';

const selectedService = ref('');
const description = ref('');

const orderToggle = [
    {title: "Готовый", value: "ready"},
    {title: "Модифицированный", value: "modified"},
    {title: "Подключ", value: "connected"},
];

const handleFormSubmit = () => {
    console.log("Форма отправлена с типом услуги:", selectedService.value);
    console.log("Описание услуги:", description.value);
};
</script>

<template>
    <section class="order-a-service" id="order-a-service" aria-labelledby="order-service-heading">
        <div class="container max-w-5xl mx-auto px-2 mb-6 md:mb-32">
            <h3 data-aos="fade-in" data-aos-duration="500"
                class="text-white text-center md:text-left md:text-black text-2xl md:text-5xl md:pr-10">Заказать
                услугу</h3>
            <div class="mt-4 bg-vlada-color-7 py-10 px-6 rounded-2xl">
                <p class="font-bold text-base md:text-2xl text-center" data-aos="zoom-in" data-aos-duration="500">
                    Услуга</p>
                <form class="w-full mt-2 md:mt-5" @submit.prevent="handleFormSubmit"
                      aria-describedby="service-description">
                    <div class="flex justify-center gap-2 md:gap-7 flex-col md:flex-row" data-aos="fade-in"
                         data-aos-duration="500" data-aos-delay="100">
                        <UiToggle class="" v-for="data in orderToggle" :label="data.title" type="primary"
                                  v-model="selectedService" :value="data.value"/>
                    </div>
                    <div class="mt-5 md:mt-7">
                        <label for="serviceDescription" class="font-bold text-base block md:text-2xl text-center"
                               data-aos="zoom-in" data-aos-duration="500">Описание
                            задачи</label>
                        <textarea id="serviceDescription" v-model="description" rows="4" data-aos="fade-in"
                                  data-aos-duration="500" data-aos-delay="100"
                                  class="outline-none mt-2 md:mt-5 block w-full rounded-2xl border-gray-300 placeholder-black px-7 py-2 text-base md:text-xl shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                                  placeholder="Опишите вашу задачу здесь..."
                                  aria-required="true"></textarea>
                    </div>
                    <div class="mt-2 md:mt-5" data-aos="zoom-in" data-aos-duration="500" data-aos-delay="200">
                        <UiButton type="quaternary" aria-label="Отправить форму для заказа услуги">
                            Отправить
                        </UiButton>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
