// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/ionic', '@nuxtjs/google-fonts', '@nuxt/ui'],
    googleFonts: {
        families: {
            "Jost": true,
            "Dancing Script": true,
        },
        download: true,
    },
    ssr: false,
    app: {
        head: {title: 'Frienda'},
    },
    css: ['assets/styles/ionic.css'],
});
