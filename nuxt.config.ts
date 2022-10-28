// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    css: ["@/assets/sass/main.scss"],
    //Global JS
    vite: {
        css: {
            preprocessorOptions: {
                sass: {
                    additionalData: '@import "@/assets/sass/_variables.sass"',
                },
            },
        },
    },
})
