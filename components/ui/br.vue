<script setup lang="ts">
interface Props {
    height: '2' | '5' | '10' | '20' | '40' | '80' | '96';
}

const props = defineProps<Props>();
</script>

<template>
    <div :class="'vlada-br-' + props.height"></div>
</template>

<style scoped lang="sass">
.vlada-br-2
    @apply mb-2

.vlada-br-5
    @apply mb-5

.vlada-br-10
    @apply mb-10

.vlada-br-20
    @apply mb-20

.vlada-br-40
    @apply mb-40

.vlada-br-80
    @apply mb-80

.vlada-br-96
    @apply mb-96
</style>
