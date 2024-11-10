<template>
    <div class="section-5 relative top-[-35px] vlada-container hidden xl:block">
        <div class=" relative bg-ms-color-11 py-[100px] rounded-[30px] px-[80px]">
            <div
                class="header-title absolute -top-16 left-72 px-5 py-2 bg-ms-color-11 text-black rounded-t-2xl font-bold text-xl">
                <div class="relative">
                    <div class="absolute overflow-hidden right-[-40px] bottom-[-76px] bg-ms-color-11 w-10 h-10">
                        <div class="relative">
                            <div class="absolute w-10 h-10 -top-[20px] -right-[20px] rounded-full bg-ms-color-10"></div>
                        </div>
                    </div>
                    <div class="absolute overflow-hidden left-[-40px] bottom-[-76px] bg-ms-color-11 w-10 h-10">
                        <div class="relative">
                            <div class="absolute w-10 h-10 -top-[20px] -left-[20px] rounded-full bg-ms-color-10"></div>
                        </div>
                    </div>
                </div>
                <h3 class="text-5xl font-medium">Mini games</h3>
            </div>
            <div class="s5-blocks flex justify-between">
                <div class="s5-block-on">
                    <h2 class="s5-h2 w-[474px] text-[32px] font-medium mb-[33px]">
                        Разработка полного цикла игр любой сложности
                    </h2>
                    <div
                        class="list-block flex text-[25px] font-medium gap-[10px]"
                        v-for="el in list"
                        :key="el.id"
                    >
                        <h4 class="">{{ el.id }}</h4>
                        <div class="s5-title">{{ el.title }}</div>
                    </div>
                    <div class="s5-logo w-[357px] relative left-[60%]">
                        <img src="../../public/icons/stick-s5.png" alt=""/>
                    </div>
                    <span
                        class="span-s5 block h-[2px] w-[382px] bg-black mb-[10px]"
                    ></span>
                    <div
                        class="title-s5 text-[24px] font-medium font-futur-regular w-[388px]"
                    >
                        Приобретая разработку у нас вы уверены в надежности и качестве
                        использованного Web-app
                    </div>
                </div>
                <div class="s5-block-rwo w-[800px]">
                    <img src="/public/icons/s5-logo.png" alt=""/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const list = [
    {id: "01.", title: "P2E"},
    {id: "02.", title: "3D games"},
    {id: "03.", title: "pvp"},
    {id: "04.", title: "casual"},
];
</script>

<style>
</style>
