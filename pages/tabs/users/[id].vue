<template>
    <ion-page>
        <ion-content>
            <div class="wrapper">
                <div class="avatar-container">
                    <avatar-content :user="user" class="avatar" />
                </div>
                <div class="name">
                    {{ user.name }}
                </div>
                <div class="buttons">
                    <app-search-button
                        class="btns_dislike btn"
                        color="light"
                        :icon="ioniconsThumbsDownSharp"
                    />
                    <app-search-button
                        class="btns_dislike btn"
                        color="light"
                        :icon="ioniconsChatbubble"
                        @click="openChat"
                    />
                    <app-search-button
                        class="btns_like btn"
                        color="light"
                        :icon="ioniconsThumbsUpSharp"
                    />
                </div>
                <div class="hobbies-container" v-if="user.hobbies.length">
                    <div class="headline">Интересы</div>
                    <hobbies :hobbies="user.hobbies" />
                </div>

                <div class="description" v-if="user.description">
                    {{ user.description }}
                </div>
            </div>
            <chat-create-modal
                v-model:active="newChatModalOpen"
                :toUserId="id"
            />
        </ion-content>
    </ion-page>
</template>
<script setup>
const { id } = useRoute().params;
import { UsersService, ChatsService } from "@/client";
const user = await UsersService.getUserUsersUserIdGet(id);
const newChatModalOpen = ref(false);
const newChatMessage = ref("");
watch(newChatModalOpen, (value) => {
    if (value) {
        newChatMessage.value = "";
    }
});
const router = useRouter();
const openChat = async () => {
    try {
        console.log(id);
        const chat = await ChatsService.getChatWithUserChatsUserUserIdGet(id);
        router.push(`/tabs/chats/${chat.id}`);
        return;
    } catch (e) {}
    newChatModalOpen.value = true;
};
</script>
<style scoped lang="scss">
.wrapper {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .avatar-container {
        background-color: $secondary;
        border-radius: 10px;
        @include flex-center;
        aspect-ratio: 1;

        .avatar {
            max-width: 200px;
        }
    }
    .name {
        text-align: center;
        font-size: 20px;
    }

    .buttons {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        justify-content: center;
        --border-radius-btn: 10px;
        border-radius: 10px;
        --btn-width: auto;
    }
    .hobbies-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
