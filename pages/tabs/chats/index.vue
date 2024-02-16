<template>
    <ion-page>
        <app-header />
        <ion-content class="content">
            <div class="wrapper">
                <auth-input placeholder="Поиск" v-model="search" />
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
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ChatsService } from "@/client";
import { useAuthStore } from "~/stores/auth";
const { userData } = useAuthStore();
const page = ref(1);
const search = ref("");
const chats = ref(await ChatsService.getChatsChatsGet(page.value));
watch(search, async (value) => {
    chats.value = await ChatsService.getChatsChatsGet(1, value);
    page.value = 1;
});
const connect = () => {
    const { apiUrl } = useRuntimeConfig().public;
    var ws = new WebSocket(`wss://${apiUrl}/chats/ws`);
    ws.addEventListener("open", (event) => {
        console.log("WebSocket Connected!");
    });

    ws.onmessage = function (event) {
        const chatData = JSON.parse(event.data);
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
    };

    ws.onclose = function (e) {
        console.log(
            "Socket is closed. Reconnect will be attempted in 1 second.",
            e.reason
        );
        setTimeout(function () {
            connect();
        }, 1000);
    };
    ws.onerror = function (err) {
        console.error(
            "Socket encountered error: ",
            err.message,
            "Closing socket"
        );
        ws.close();
    };
};
connect();
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
