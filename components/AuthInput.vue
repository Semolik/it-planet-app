<template>
    <input class="input" :value="modelValue" @input="handleChangeValue" />
</template>

<script setup>
defineProps(['modelValue'])

const emit = defineEmits(['update:modelValue'])

const handleChangeValue = (event) => {
    emit('update:modelValue', event.target.value)
}
</script>

<style scoped lang="scss">
.input {
    font-size: 24px;
    border: none;
    background: #f2f3f4;
    border-radius: 8px;
    color: #5f5f5f;
    outline: none;
    padding: 5px 10px;
    caret-color: #62A87C;
}
</style>