<template>
    <ion-button @click="handlePushBack" class="btn" shape="round">
        <ion-icon color="light" size="large" :icon="ioniconsArrowBackOutline"></ion-icon>
    </ion-button>
</template>

<script setup>
const router = useRouter();

const handlePushBack = () => {
    router.back();
};
</script>

<style scoped lang="scss">
.btn {
    position: absolute;
    left: 5px;
    right: auto;
    top: 5px;
    bottom: auto;
    width: 50px;
    height: 50px;
    --border-radius: 50%;
    --padding-start: 0;
    --padding-end: 0;
    --box-shadow: none;
}
</style>
