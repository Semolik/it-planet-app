<template>
    <input class="input" @update:model-value="handleChangeValue" v-model="modelValue" />
</template>

<script setup>
const props = defineProps(['modelValue?'])
const emit = defineEmits(['update:modelValue'])
const handleChangeValue = (value) => {
    emit('update:modelValue', value)
}
</script>

<style scoped lang="scss">
.input {
    font-size: 24px;
    border: none;
    background: #f2f3f4;
    border-radius: 8px;
    color: #5f5f5f;
    // outline: #62A87C solid 1px;
    outline: none;
    padding: 5px 10px;
    caret-color: #62A87C;
}
</style>