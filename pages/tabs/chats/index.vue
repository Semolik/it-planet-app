<template>
    <ion-page>
        <ion-content class="content">
            <div class="wrapper" v-if="userData?.verified">
                <ion-searchbar
                    v-model="search"
                    placeholder="Поиск"
                    mode="ios"
                ></ion-searchbar>
                <div class="chats">
                    <chats-chat
                        v-for="chat in chats"
                        :chat="chat"
                        :key="chat.last_message.id"
                        :current-user-id="userData.id"
                    />
                    <div class="empty" v-if="chats.length === 0">
                        {{ search ? "Ничего не найдено" : "У вас нет чатов" }}
                    </div>
                </div>
            </div>
            <div class="wrapper verify" v-else>
                <div class="message">
                    ПОставить рабочую ссылку на подтверждение аккаунта
                    <br />Чтобы пользоваться чатами, вам нужно<nuxt-link
                        >подтвердить свой аккаунт</nuxt-link
                    >
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ChatsService } from "@/client";
import { useAuthStore } from "~/stores/auth";
import { useChatsStore } from "~/stores/chats";
const { userData } = useAuthStore();
const chatsStore = useChatsStore();
const page = ref(1);
const search = ref("");
const chats = ref([]);
if (userData?.verified) {
    chats.value = await ChatsService.getChatsChatsGet(page.value);
    watch(search, async (value) => {
        chats.value = await ChatsService.getChatsChatsGet(1, value);
        page.value = 1;
    });
    await chatsStore.subscribeToWebSocket((chatData) => {
        console.log(chatData);
        const chatIndex = chats.value.findIndex(
            (chat) => chat.id === chatData.id
        );
        if (chatIndex !== -1) {
            if (search.value) {
                chats.value[chatIndex] = chatData;
            } else {
                chats.value.splice(chatIndex, 1);
                chats.value.unshift(chatData);
            }
        } else if (!search.value) {
            chats.value.unshift(chatData);
        }
    });
}
</script>
<style scoped lang="scss">
.content {
    --background: #{$secondary};
    .wrapper {
        padding: 10px;
        display: flex;
        height: 100%;
        flex-direction: column;
        gap: 10px;

        &.verify {
            @include flex-center;
            flex-grow: 1;
            .message {
                text-align: center;
                color: $primary-text;
                font-size: 18px;
            }
        }
        .chats {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex-grow: 1;
            .empty {
                text-align: center;
                color: $primary-text;
                @include flex-center;
                flex-grow: 1;
            }
        }
    }
}
</style>
