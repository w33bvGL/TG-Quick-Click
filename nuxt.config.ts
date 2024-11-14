// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    ssr: true,
    swr: true,
    isr: true,
    prerender: true,
    devtools: {enabled: false},

    app: {
        head: {
            htmlAttrs: {
                lang: 'ru'
            }
        }
    },

    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    api: 'modern-compiler'
                }
            }
        }
    },

    runtimeConfig: {
        public: {
            appName: process.env.APP_NAME || 'APP_NAME IS MISSING',
            appTelegram: process.env.APP_TELEGRAM,
            appPhone: process.env.APP_PHONE,
            appVK: process.env.APP_VK,
            appEmail: process.env.APP_EMAIL,
        }
    },

    css: [
        '~/assets/styles/_root.sass',
    ],

    modules: ['@nuxtjs/tailwindcss', '@nuxt/image', '@nuxt/icon', 'nuxt-aos', 'nuxt-swiper'],

    tailwindcss: {
        cssPath: ['~/assets/styles/_tailwind.sass', {injectPosition: "first"}],
        configPath: 'tailwind.config',
        exposeConfig: {
            level: 2
        },
        config: {},
        viewer: true,
    },
})
