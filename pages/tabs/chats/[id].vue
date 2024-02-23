<template>
    <ion-page>
        <ion-content class="content">
            <div class="head">
                <nuxt-link class="back" to="/tabs/chats">
                    <Icon name="material-symbols:arrow-back-ios-rounded" />
                    <span> Назад </span>
                </nuxt-link>
                <div>
                    {{ toUser.name }}
                </div>
                <avatar :image="toUser.avatar" class="avatar" />
            </div>
            <div class="wrapper"></div>
        </ion-content>
    </ion-page>
</template>
<script setup>
import { ChatsService } from "@/client";

import { useAuthStore } from "~/stores/auth";
const { userData } = useAuthStore();
const { id } = useRoute().params;

const chat = await ChatsService.getChatChatsChatIdGet(id);
const toUser = getUserToId(userData.id, chat.user_1, chat.user_2);
</script>
<style scoped lang="scss">
.content {
    --background: #{$secondary};
    .head {
        display: flex;
        background-color: white;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 5px;
        .avatar {
            width: 50px;
            height: 50px;
        }

        .back {
            @include flex-center;
            color: $primary-text;
            margin-left: 10px;
            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
    .wrapper {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
}
</style>
