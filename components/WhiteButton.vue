<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
.btn {
    color: #62A87C;
    background-color: #F5F5F5;
    padding: 5px;
    border-radius: 8px;

    &:active {
        background-color: #62A87C;
        color: #f5f5f5;
    }

    &:disabled {
        pointer-events: none;
        opacity: .3;
    }
}
</style>