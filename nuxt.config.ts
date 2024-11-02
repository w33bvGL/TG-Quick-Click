// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    swr: true,
    isr: true,
    prerender: true,

    devtools: {enabled: true},

    css: [
        '~/assets/styles/_root.sass',
    ],

    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    api: 'modern-compiler'
                }
            }
        }
    },

    tailwindcss: {
        cssPath: ['~/assets/styles/_tailwind.sass', {injectPosition: "first"}],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },

    modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon', 'nuxt-aos', 'nuxt-swiper']
})