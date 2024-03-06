<template>
    <div class="hobby">
        {{ hobby.name }}
    </div>
</template>
<script setup>
defineProps({
    hobby: Object,
});
</script>
<style scoped lang="scss">
.hobby {
    padding: 5px 20px;
    background-color: $secondary;
    border-radius: 20px;
    flex-grow: 1;
    text-align: center;
}
</style>
