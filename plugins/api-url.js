import { OpenAPI } from "@/client";
export default defineNuxtPlugin((nuxtApp) => {
    OpenAPI.BASE = process.dev ? "/api" : "https://frienda-api.semolik.ru";
    OpenAPI.WITH_CREDENTIALS = true;
});
