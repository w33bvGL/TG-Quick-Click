<script setup lang="ts">
import {useRuntimeConfig, useHead} from '#app'

const config = useRuntimeConfig();

useHead({
    title: `Кликеры под ключ | ${config.public.appName}`,
    meta: [
        {
            name: 'description',
            content: `Мы разрабатываем кликеры под ключ, адаптированные под ваши нужды. Закажите у нас уникальное приложение с ${config.public.appName}!`
        },
        {name: 'keywords', content: 'кликеры, под ключ, разработка кликеров, кастомные кликеры'},
        {name: 'robots', content: 'index, follow'},
        {name: 'author', content: config.public.appName},
        {property: 'og:title', content: `Кликеры под ключ | ${config.public.appName}`},
        {
            property: 'og:description',
            content: `Мы разрабатываем кликеры под ключ, адаптированные под ваши нужды. Закажите уникальное приложение с ${config.public.appName}!`
        },
        {property: 'og:type', content: 'website'},
        {property: 'og:url', content: 'https://yourwebsite.com'},
        {property: 'og:image', content: 'https://yourwebsite.com/og-image.jpg'}
    ]
});
</script>

<template>
    <div>
        <NuxtLayout>
            <NuxtPage/>
        </NuxtLayout>
    </div>
</template>

