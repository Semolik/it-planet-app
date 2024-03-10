import { useAuthStore } from "~~/stores/auth";
export default defineNuxtRouteMiddleware(async (to, from) => {
  const authStore = useAuthStore();
  await authStore.getUserData();
  if (
    !authStore.logined &&
    ![
      "auth",
      "register",
      "reset-password",
      "forgot-password",
      "registration-signup",
      "registration-userinfo",
    ].includes(to.name)
  ) {
    return navigateTo("/auth");
  }
});
