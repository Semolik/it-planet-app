<template>
    <header :class="['header', { onlyTitle: hideButtons }]">
        <app-header-button
            v-if="!hideButtons"
            :icon="ioniconsNotificationsOutline"
            @click="() => emit('notifications')"
        />
        <div class="header__title">Frienda</div>
        <app-header-button
            v-if="!hideButtons"
            :icon="ioniconsOptionsOutline"
            @click="() => emit('options')"
        />
    </header>
</template>

<script setup>
defineProps({
    hideButtons: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["notifications", "options"]);
</script>

<style scoped lang="scss">
.header {
    padding: 0 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #62a87c;
    color: #f2f3f4;

    &__title {
        font-family: "Dancing Script", sans-serif;
        font-size: 40px;
    }
    &.onlyTitle {
        justify-content: center;
    }
}
</style>
