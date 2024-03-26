<template>
    <div class="liked-card">
        <div class="headline">
            <avatar :image="user.image" />
            <div class="name">
                {{ user.name }}
            </div>
            <div :class="['like', { liked: liked }]" @click="emit('like')">
                <Icon
                    :name="
                        liked && is_match ? 'mdi:heart-multiple' : 'mdi:heart'
                    "
                />
            </div>
        </div>
        <div class="info"></div>
        <green-button padding="10px">Написать</green-button>
    </div>
</template>
<script setup>
const props = defineProps({
    user: Object,
    liked: Boolean,
    is_match: Boolean,
});
const emit = defineEmits(["like"]);
</script>
<style scoped lang="scss">
.liked-card {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 10px;
    .headline {
        display: grid;
        gap: 10px;
        grid-template-columns: 60px 1fr 60px;
        position: relative;
        .name {
            font-size: 20px;
            @include flex-center;
        }

        .like {
            @include flex-center;
            font-size: 30px;
            color: $tertiary;
            background-color: $secondary;
            border-radius: 50%;
            &.liked {
                color: $primary;
            }
        }
    }
}
</style>
