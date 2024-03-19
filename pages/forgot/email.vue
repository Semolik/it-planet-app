<template>
    <ion-page>
        <app-registration-header :title="'Сброс пароля'" />
        <ion-content class="content">
            <div class="wrapper">
                Введите почту для восстановления
                <auth-input :placeholder="Email"></auth-input>
                <white-button @click="submit" :disabled="!isActive" class="submit-btn">Продолжить</white-button>
            </div>
            <!-- <Transition>
                <email-verify
                    v-if="submitted"
                    @hideVerify="toggleVerify"
                    :email="email"
                    class="email-verify"
                ></email-verify>
            </Transition> -->
        </ion-content>
    </ion-page>
</template>

<script setup>
const isActive = computed(
  () => email.value.length > 0 && email.value.includes("@")
);
</script>

<style scoped lang="scss">
.content {
    font-size: 18px;
    --color: #f2f3f4;
    --background: linear-gradient(180deg, #62a87c, #72b189) no-repeat;

    .wrapper {
        width: 100%;
        height: 100%;
        padding: 0 5vw;
        display: flex;
        justify-content: center;
        flex-direction: column;
    }
}
</style>
