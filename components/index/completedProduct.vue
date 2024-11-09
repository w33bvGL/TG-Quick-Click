<template>
  <section class="section py150px">
    <div class="container py-20px flex">
      <h2 class="mr-[90px] min-w-max text-[40px] font-medium">
        Готовый продукт
      </h2>
      <div class="section_block items-start flex w-full justify-between">
        <div
          class="middle_block grid grid-cols-3 gap-y-[40px] gap-x-[60px] w-[40%]"
        >
          <div
            class="middle_block max-w-[62px]"
            v-for="item in services"
            :key="item.num"
          >
            <h4 class="h1_t">{{ item.num }}</h4>
            <div class="text text-[20px] font-medium">{{ item.text }}</div>
          </div>
        </div>
        <div class="logo__block">
          <img src="../../public/icons/logo_block.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { num: "01.", text: "Быстрая работа" },
  { num: "02.", text: "Продуманный дизайн" },
  { num: "03.", text: "UI кит" },
  { num: "04.", text: "Проверенный функционал" },
  { num: "05.", text: "Поддержка всех устройств" },
];
</script>

<style>
.h1_t {
  @apply font-medium text-[90px] font-futur-regular;
}
</style>