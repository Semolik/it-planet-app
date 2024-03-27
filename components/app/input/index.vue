<template>
    <UInput
        color="primary"
        variant="outline"
        gray="cool"
        size="lg"
        :ui="{
            strategy: 'override',
            color: {
                white: {
                    solid: 'bg-white dark:bg-gray-900',
                },
            },
        }"
        v-bind="$attrs"
        v-if="!textarea"
    />
    <UTextarea
        color="primary"
        variant="outline"
        gray="cool"
        size="lg"
        :ui="{
            strategy: 'override',
            color: {
                white: {
                    solid: 'bg-white dark:bg-gray-900',
                },
            },
        }"
        v-bind="$attrs"
        v-else
    />
</template>
<script setup>
defineProps({
    textarea: Boolean,
});
</script>
