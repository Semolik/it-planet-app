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
    />
</template>
