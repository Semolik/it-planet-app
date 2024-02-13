<template>
    <ion-page>
        <app-header />
        <ion-content class="content">
            <div class="wrapper">
                <auth-input placeholder="Поиск" />
                <div class="chats">
                    <chats-chat
                        v-for="chat in chats"
                        :chat="chat"
                        :key="chat.last_message.id"
                        :current-user-id="userData.id"
                    />
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
const chats = ref(await ChatsService.getChatsChatsGet(page.value));
const { apiUrl } = useRuntimeConfig().public;
var ws = new WebSocket(`ws://${apiUrl}/chats/ws`);
ws.addEventListener("open", (event) => {
    console.log("WebSocket Connected!");
});

ws.onmessage = function (event) {
    const chatData = JSON.parse(event.data);
    chats.value = chats.value.filter((chat) => chat.id !== chatData.id);
    chats.value.push(chatData);
};
</script>
<style scoped lang="scss">
.content {
    --background: hsl(210, 8%, 95%);
    .wrapper {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        .chats {
        }
    }
}
</style>
