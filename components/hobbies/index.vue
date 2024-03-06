<template>
    <div class="hobbies">
        <hobbies-item v-for="hobby in hobbies" :hobby="hobby" />
    </div>
</template>
<script setup>
defineProps({
    hobbies: Array,
});
</script>
<style scoped lang="scss">
.hobbies {
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
}
</style>
