<template>
    <ion-modal ref="modal" :is-open="active" mode="ios">
        <ion-header>
            <ion-toolbar>
                <ion-title> Описание профиля </ion-title>
                <ion-buttons slot="end">
                    <ion-button :strong="true" @click="active = false">
                        Готово
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="content">
            <div class="wrapper">
                <app-input
                    textarea
                    v-model="description"
                    placeholder="Описание профиля"
                />
                <green-button
                    padding="15px"
                    :disabled="!descriptionChanged"
                    @click="updateDescription"
                >
                    Сохранить
                </green-button>
            </div>
        </ion-content>
    </ion-modal>
</template>
<script setup>
import { useAuthStore } from "~/stores/auth";
import { storeToRefs } from "pinia";
const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);
const props = defineProps({
    active: Boolean,
});

const emit = defineEmits(["update:active"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
const description = ref(userData.value.description);
watch(active, async (value) => {
    if (value) {
    }
});
const descriptionChanged = computed(() => {
    return description.value !== userData.value.description;
});
const updateDescription = async () => {
    if (!descriptionChanged.value) return;
    await authStore.updateProfile({ description: description.value });
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
