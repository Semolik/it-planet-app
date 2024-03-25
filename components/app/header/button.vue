<template>
    <ion-button v-bind="$attrs" shape="round">
        <ion-icon
            v-bind="$attrs"
            size="large"
            color="light"
            aria-hidden="true"
        />
        <div class="number-bage" v-if="number">
            {{ number }}
        </div>
    </ion-button>
</template>

<script setup>
defineProps({
    number: {
        type: Number,
        default: null,
    },
});
</script>

<style scoped lang="scss">
ion-button {
    --border-radius: 50%;
    width: 40px;
    height: 40px;
    --padding-start: 0;
    --padding-end: 0;
    --box-shadow: none;
    .number-bage {
        position: absolute;
        bottom: 20%;
        right: 10%;
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 2px 5px;
        font-size: 12px;
    }
}
</style>
