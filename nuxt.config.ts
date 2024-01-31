// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/ionic",
        "@nuxtjs/google-fonts",
        "@nuxt/ui",
        "nuxt-swiper",
        "@pinia/nuxt",
    ],
    plugins: ["~/plugins/api-url"],
    googleFonts: {
        families: {
            Jost: true,
            "Dancing Script": true,
        },
        download: true,
    },
    ssr: false,
    app: {
        head: { title: "Frienda" },
    },
    css: ["assets/styles/ionic.css"],
    nitro: {
        devProxy: {
            "/api": {
                target: "http://localhost:8000",
                changeOrigin: true,
                prependPath: true,
                cookieDomainRewrite: false,
            },
        },
    },
});
