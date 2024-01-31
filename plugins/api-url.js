import { OpenAPI } from "@/client";
export default defineNuxtPlugin((nuxtApp) => {
    OpenAPI.BASE = "/api";
    OpenAPI.WITH_CREDENTIALS = true;
});
