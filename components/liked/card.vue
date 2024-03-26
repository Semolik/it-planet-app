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
        <chats-create-modal
            v-model:active="newChatModalOpen"
            :toUserId="user.id"
        />
        <div class="buttons">
            <green-button padding="10px" @click="openChat">
                Написать
            </green-button>
            <green-button padding="10px" :to="`/tabs/users/${user.id}`">
                Открыть профиль
            </green-button>
        </div>
    </div>
</template>
<script setup>
const props = defineProps({
    user: Object,
    liked: Boolean,
    is_match: Boolean,
});
const emit = defineEmits(["like"]);
const newChatModalOpen = ref(false);
const openChat = async () => {
    try {
        const chat = await ChatsService.getChatWithUserChatsUserUserIdGet(id);
        router.push(`/tabs/chats/${chat.id}`);
        return;
    } catch (e) {}
    newChatModalOpen.value = true;
};
</script>
<style scoped lang="scss">
.liked-card {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
    gap: 15px;
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

    .buttons {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
}
</style>
