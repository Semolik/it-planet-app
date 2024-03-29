<template>
    <ion-page>
        <app-registration-header :title="'Восстановление пароля'" />
        <ion-content class="content">
            <div class="wrapper">
                <auth-input
                    class="auth-frame__input"
                    v-model="email"
                    placeholder="Email"
                />
                <white-button
                    @click="submit"
                    :disabled="!isActive"
                    class="auth-frame__submit-btn"
                    padding="15px"
                >
                    Восстановить
                </white-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { AuthService } from "@/client";
import { alertController } from "@ionic/vue";
const email = ref("");

const isActive = computed(() =>
    /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email.value)
);
const submit = async () => {
    if (!isActive.value) return;
    try {
        await AuthService.resetForgotPasswordAuthForgotPasswordPost({
            email: email.value,
        });
        const alert = await alertController.create({
            message:
                "Письмо с инструкциями по восстановлению пароля отправлено на вашу почту",
            htmlAttributes: {
                "aria-label": "alert dialog",
            },
        });
        alert.present();
        const router = useRouter();
        router.push("/auth");
    } catch (error) {
        const alert = await alertController.create({
            message: HandleOpenApiError(error).message,
            htmlAttributes: {
                "aria-label": "alert dialog",
            },
        });
        alert.present();
    }
};
</script>

<style scoped lang="scss">
.content {
    --color: #f2f3f4;
    --background: linear-gradient(180deg, #62a87c, #72b189) no-repeat;
    .wrapper {
        display: flex;
        flex-direction: column;
        padding: 10px;
        height: 100%;
        .auth-frame__submit-btn {
            margin-top: auto;
            padding: 15px;
        }
    }
}
</style>
