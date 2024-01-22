<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script setup>

</script>

<style scoped lang="scss">
.btn {
    outline: 1px solid #62A87C;
    padding: 5px;
    border-radius: 8px;

    &:active {
        background-color: #62A87C;
    }
}
</style>