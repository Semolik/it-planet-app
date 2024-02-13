// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/ionic",
        "@nuxtjs/google-fonts",
        "@nuxt/ui",
        "nuxt-swiper",
        "@pinia/nuxt",
        "nuxt-icon",
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
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: [
                        '@use "@/assets/styles/colors.scss" as *;',
                        '@use "@/assets/styles/helpers.scss" as *;',
                    ].join(""),
                },
            },
        },
    },
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
    runtimeConfig: {
        public: {
            apiUrl: "localhost:8000",
        },
    },
});
