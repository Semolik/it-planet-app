<template>
    <ion-popover :is-open="active" @ionPopoverDidDismiss="active = false">
        <div class="wrapper">
            <div class="field">
                <div class="label">Введите новый пароль</div>
                <app-input
                    v-model="password"
                    type="password"
                    placeholder="Пароль"
                />
            </div>
            <div class="field">
                <div class="label">Повторите пароль</div>
                <app-input
                    v-model="passwordRepeat"
                    type="password"
                    placeholder="Пароль"
                />
            </div>
            <green-button
                @click="updatePassword"
                :disabled="!passwordCorrect"
                padding="15px"
                :style="{ marginTop: 'auto' }"
            >
                Обновить
            </green-button>
        </div>
    </ion-popover>
</template>
<script setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const props = defineProps({
    active: Boolean,
});

const emit = defineEmits(["update:active"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
const password = ref("");
const passwordRepeat = ref("");
watch(active, async (value) => {
    if (value) {
        password.value = "";
        passwordRepeat.value = "";
    }
});
const passwordCorrect = computed(
    () =>
        password.value &&
        password.value === passwordRepeat.value &&
        password.value.length >= 8
);

const updatePassword = async () => {
    if (!passwordCorrect.value) return;
    await authStore.updateProfile({ password: password.value });
    active.value = false;
};
</script>
<style scoped lang="scss">
.wrapper {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
