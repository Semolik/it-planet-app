<template>
    <ion-button v-bind="$attrs" shape="round">
        <ion-icon
            v-bind="$attrs"
            size="large"
            color="secondary"
            aria-hidden="true"
        />
    </ion-button>
</template>

<script setup></script>

<style scoped lang="scss">
ion-button {
    --border-radius: var(--border-radius-btn, 50%);
    width: var(--btn-width, 80px);
    height: var(--btn-height, 80px);
    --padding-start: 0;
    --padding-end: 0;
    --box-shadow: none;
}
</style>
