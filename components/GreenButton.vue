<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
.btn {
    padding: 5px;
    border-radius: 8px;
    background-color: #62A87C;
    user-select: none;

    &:active {
        background-color: #56946d;
    }
}
</style>