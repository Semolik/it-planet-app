<template>
    <ion-popover :is-open="active" @ionPopoverDidDismiss="active = false">
        <div class="wrapper">
            <app-input v-model="email"></app-input>
            <green-button
                @click="updateEmail"
                class="submitButton"
                padding="15px"
                :disabled="!buttonActive"
            >
                Обновить
            </green-button>
        </div>
    </ion-popover>
</template>
<script setup>
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);
const email = ref(userData.value.email);
const props = defineProps({
    active: Boolean,
});
const emit = defineEmits(["update:active"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
watch(active, () => {
    email.value = userData.value.email;
});
const emailCorrect = computed(() =>
    /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/.test(email.value)
);
const buttonActive = computed(
    () => emailCorrect.value && userData.value.email != email.value
);
const updateEmail = async () => {
    if (!emailCorrect.value) return;
    await authStore.updateProfile({ email: email.value });
};
</script>
<style scoped lang="scss">
.wrapper {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    height: 100%;
}
</style>
