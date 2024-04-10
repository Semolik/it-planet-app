import { OpenAPI } from "@/client";
export default defineNuxtPlugin((nuxtApp) => {
    OpenAPI.BASE = process.dev ? "/api" : "https://frienda.website";
    OpenAPI.WITH_CREDENTIALS = true;
});
