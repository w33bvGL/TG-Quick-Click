<script setup lang="ts">

interface Props {
    type: "primary" | "secondary" | "tertiary" | "quaternary";
    label?: string;
    modelValue?: string;
    value?: string;
    to?: string;
    icon?: string;
}

const props = defineProps<Props>();

import {ref, watch} from 'vue';

const emit = defineEmits(['update:modelValue']);
const isActive = ref(props.modelValue === props.value);

watch(() => props.modelValue, (newValue) => {
    isActive.value = newValue === props.value;
});

const toggle = () => {
    emit('update:modelValue', isActive.value ? '' : props.value);
    isActive.value = !isActive.value;
};

const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        toggle();
    }
};
</script>

<template>
    <button v-if="props.type === 'primary'"
            @click="toggle"
            role="button"
            tabindex="0"
            :aria-pressed="isActive"
            :class="['cursor-pointer', isActive ? 'bg-vlada-color-5' : 'bg-white text-black']"
            class="px-4 py-2 rounded-3xl">
        <span class="text-base  md:text-2xl font-medium">{{ label }}</span>
    </button>
</template>


