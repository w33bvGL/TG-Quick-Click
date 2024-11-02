<script setup lang="ts">
interface Props {
    type: "primary" | "secondary" | "tertiary" | "quaternary";
    to?: string;
    icon?: string;
}

const props = defineProps<Props>();
</script>

<template>
    <a v-if="props.type === 'primary'"
       :key="props.to"
       :href="props.to"
       :target="props.to.startsWith('tel:' || 'mailto:') ? '_self' : '_blank'"
       class="p-2.5 bg-white rounded-full flex items-center"
    >
        <Icon :name="props.icon" class="text-vlada-color-5 text-4xl"/>
    </a>
    <a v-if="props.type === 'secondary'"
       :key="props.to"
       :href="props.to"
       :target="props.to.startsWith('tel:') ? '_self' : '_blank'"
       class="text-white underline text-5xl text-nowrap"
    >
        <slot/>
    </a>
    <a v-if="props.type === 'tertiary'"
       :key="props.to"
       :href="props.to"
       :target="props.to.startsWith('tel:') ? '_self' : '_blank'"
       class="p-2.5 bg-white md:bg-black rounded-full flex items-center"
    >
        <Icon :name="props.icon" class="text-vlada-color-2 md:text-white text-2xl"/>
    </a>
    <div v-if="props.type === 'quaternary'" role="button" class="bg-vlada-color-8 py-2 px-4 text-center rounded-3xl text-2xl">
        <slot/>
    </div>
</template>

<style scoped>

</style>
