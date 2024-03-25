<template>
    <div class="user">
        <img :src="user.image" />
        <div class="user-info" @click="toggleInfo">
            <div class="user-info__name">{{ user.name }}, {{ user.age }}</div>
            <div class="user-info__desc">{{ user.description }}</div>
        </div>
    </div>
</template>

<script setup>
defineProps({
    user: {
        type: Object,
        required: true,
    },
});
const infoHeightCoeff = ref(0.7);
const infoTopCoeff = ref(1);
const toggleInfo = () => {
    if (infoHeightCoeff.value === 0.7) {
        infoHeightCoeff.value = 0;
        infoTopCoeff.value = 7;
    } else {
        infoHeightCoeff.value = 0.7;
        infoTopCoeff.value = 1;
    }
};
</script>

<style scoped lang="scss">
.user {
    user-select: none;
    border-radius: 25px;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .user-info {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: calc(100% * v-bind(infoHeightCoeff));
        background-color: #11111141;
        z-index: 2;
        color: #f2f3f4;
        padding: calc(1% * v-bind(infoTopCoeff)) 4%;
        transition: 0.45s;
        backdrop-filter: blur(5px);

        &__name {
            font-size: 24px;
        }

        &__desc {
            font-size: 16px;
        }
    }
}
</style>
