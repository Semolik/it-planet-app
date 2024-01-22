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
    border: 1px solid #cecece;
    background: #FFFFFF;
    border-radius: 8px;
    color: #3f3f3f;
    outline: #62A87C solid 1px;
    padding: 5px 10px;
    caret-color: #62A87C;
}
</style>