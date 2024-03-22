<template>
    <button :class="['btn', { black }]">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps({
    black: Boolean,
});
</script>

<style scoped lang="scss">
.btn {
    color: #62a87c;
    background-color: #f5f5f5;
    padding: 5px;
    border-radius: 8px;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &.black {
        color: $secondary-text;

        &:disabled {
            color: $tertiary-text;
        }
    }

    &:active {
        background-color: #f5f5f580;
    }

    &:disabled {
        pointer-events: none;
        opacity: 0.5;
    }
}
</style>
