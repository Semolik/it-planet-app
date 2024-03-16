<template>
    <button :disabled="disabled" class="btn">
        <slot></slot>
    </button>
</template>

<script setup>
defineProps ({
    disabled:{
        required:false,
        default:false,
    },
    padding:{
        required:false,
        default: '5px',
    }
})
</script>

<style scoped lang="scss">
.btn {
    padding: v-bind(padding);
    border-radius: 8px;
    background-color: #62A87C;
    user-select: none;

    &:active {
        background-color: #56946d;
    }
    &:disabled{
        background-color: $light-primary;
        color: $tertiary-text;
    }
}
</style>