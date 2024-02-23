<template>
    <ion-nav :root="component"></ion-nav>
</template>

<script setup>
import signup from '@/pages/registration/signup.vue';

const component = ref(markRaw(signup));
</script>

<style scoped lang="scss"></style>