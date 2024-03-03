<template>
    <nuxt-link :to="link" class="avatar" v-if="link">
        <avatar-content :image="image" />
    </nuxt-link>
    <div class="avatar" v-else>
        <avatar-content :image="image" />
    </div>
</template>
<script setup>
defineProps({
    link: String,
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
    color: black;
}
</style>
