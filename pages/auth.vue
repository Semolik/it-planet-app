<template>
    <ion-page>
        <ion-content>
            <div class="wrapper">
                <div class="title">Frienda</div>
                <div class="auth-frame">
                    <div class="auth-frame__title">Авторизация</div>
                    <auth-input
                        class="auth-frame__input"
                        v-model="login"
                        placeholder="Email"
                    />
                    <auth-input
                        class="auth-frame__input"
                        v-model="password"
                        type="password"
                        placeholder="Пароль"
                    />
                    <white-button
                        @click="submit"
                        :disabled="!isActive"
                        class="auth-frame__submit-btn"
                        >Войти</white-button
                    >
                </div>
                <div class="auth-problems">
                    <nuxt-link to="/forgot-password">
                        <white-button class="auth-problems__forgot-btn"
                            >Сброс пароля</white-button
                        >
                    </nuxt-link>
                    <nuxt-link to="/registration/signup">
                        <white-button class="auth-problems__signup-btn"
                            >Регистрация</white-button
                        >
                    </nuxt-link>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { useAuthStore } from "~~/stores/auth";
import { alertController } from "@ionic/vue";

const authStore = useAuthStore();
const login = ref("");
const password = ref("");

const isActive = computed(
    () =>
        password.value.length >= 8 &&
        login.value.length > 0 &&
        login.value.includes("@")
);

const submit = async () => {
    if (!isActive.value) return;
    const error = await authStore.login(login.value, password.value);
    if (error) {
        const alert = await alertController.create({
            message: HandleOpenApiError(error).message,
            htmlAttributes: {
                "aria-label": "alert dialog",
            },
        });
        alert.present();
    } else {
        const router = useRouter();
        router.push("/tabs/search");
    }
};
</script>

<style scoped lang="scss">
.wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5vw;
    background-color: #62a87c;
}

.title {
    font-family: "Dancing Script", sans-serif;
    color: #f2f3f4;
    font-size: 100px;
}

.auth-frame {
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    gap: 7px;

    &__title {
        font-size: 30px;
        color: #f2f3f4;
    }

    &__submit-btn {
        width: 100%;
        height: 46px;
        font-size: 24px;
        box-shadow: 0 0 3px #5f5f5f;
        margin-top: 15px;
        margin-bottom: 15px;

        &:active {
            box-shadow: none;
        }
    }
}

.auth-problems {
    width: 100%;
    padding: 5px;
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;

    &__forgot-btn,
    &__signup-btn {
        height: 40px;
        width: 42.5vw;
        box-shadow: 0 0 3px #5f5f5f;
        font-size: 20px;
    }

    &__forgot-btn {
        margin-right: 5px;
    }

    &__signup-btn {
        margin-left: 5px;
    }
}
</style>
