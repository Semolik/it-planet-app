<template>
    <div class="avatar">
        <img :src="image" alt="avatar" v-if="image" />
        <div class="no-image" v-else>
            <Icon name="material-symbols:person" />
        </div>
    </div>
</template>
<script setup>
defineProps({
    image: String,
});
</script>
<style scoped lang="scss">
.avatar {
    border-radius: 50%;
    overflow: hidden;
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    aspect-ratio: 1;
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
}
</style>
