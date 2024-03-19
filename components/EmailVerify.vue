<template>
    <div @click.stop="handleHideVerify" class="wrapper">
        <div @click.stop class="verify-window">
            <div class="verify-window__title">
                На адрес <b>{{ email }}</b> отправлено письмо с ссылкой. Для подтверждения аккаунта перейдите по ней.
            </div>
            <green-button @click.stop="handleHideVerify" class="verify-window__submit-btn">Хорошо</green-button>
        </div>
    </div>
</template>

<script setup>
defineProps(["email"]);

const emit = defineEmits(["hideVerify"]);
const handleHideVerify = (event) => {
    emit("hideVerify", event.target.value);
}
</script>

<style scoped lang="scss">
.wrapper {
    transition: 0.2s;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    padding: 0;
    background-color: #11111150;

    .verify-window {
        padding: 15px 15px;
        line-height: 1;
        color: #5f5f5f;
        border-radius: 20px;
        background-color: #f2f3f4;

        &__title {
            margin-bottom: 10px;
        }

        &__submit-btn {
            color: #f2f3f4;
            width: 100%;
            height: 40px;
        }
    }
}
</style>
