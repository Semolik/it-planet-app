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
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:active {
        background-color: #f5f5f580;
    }

    &:disabled {
        pointer-events: none;
        opacity: .5;
    }
}
</style>