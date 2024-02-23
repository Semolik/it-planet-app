import { defineNuxtConfig } from "nuxt/config";
export default defineNuxtConfig({
    modules: [
        "@nuxtjs/ionic",
        "@nuxtjs/google-fonts",
        "@nuxt/ui",
        "nuxt-swiper",
        "@pinia/nuxt",
        "nuxt-icon",
        "@nuxt-alt/proxy",
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
    runtimeConfig: {
        public: {
            wsURL: "wss://frienda-api.semolik.ru",
        },
    },
    proxy: {
        experimental: {
            listener: true,
        },
        proxies: {
            "/api": {
                target: "https://frienda-api.semolik.ru",
                changeOrigin: true,
                prependPath: true,
                rewrite: (path: string) => path.replace(/^\/api/, ""),
                cookieDomainRewrite: false,
                ws: true,
            },
        },
    },
    $development: {
        runtimeConfig: {
            public: {
                wsURL: "ws://localhost:3000/api",
            },
        },
    },
});
