<template>
    <img :src="image" alt="avatar" v-if="image" />
    <div class="no-image" v-else>
        <Icon name="material-symbols:person" />
    </div>
</template>
<script setup>
defineProps({
    image: String,
});
</script>
<style scoped lang="scss">
img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.no-image {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
        width: 50%;
        height: 50%;
    }
}
</style>
