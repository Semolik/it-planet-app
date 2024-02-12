<template>
    <ion-page>
        <app-header />
        <ion-content class="content">
            <div class="wrapper">
                <auth-input placeholder="Поиск" />
                <div class="chats">
                    <nuxt-link
                        class="chat"
                        v-for="chat in chats"
                        :key="chat.id"
                        :to="`/tabs/chats/${chat.id}`"
                    >
                        <img class="chat-avatar" :src="chat.avatar" />
                        <div class="chat-name">{{ chat.name }}</div>
                    </nuxt-link>
                </div>
                {{ messages }}
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { ChatsService } from "@/client";
const page = ref(1);
const chats = ref(await ChatsService.getChatsChatsGet(page.value));
const { apiUrl } = useRuntimeConfig().public;
var ws = new WebSocket(`ws://${apiUrl}/chats/ws`);
ws.addEventListener("open", (event) => {
    console.log("WebSocket Connected!");
});
const messages = ref([]);
ws.onmessage = function (event) {
    // console.log(event.data);
    messages.value.push(event.data);
};
</script>
<style scoped lang="scss">
.content {
    --background: hsl(210, 8%, 95%);
    .wrapper {
        padding: 10px;
        .chats {
            .chat {
                display: flex;
                align-items: center;
                padding: 10px;
                border-radius: 10px;
                background-color: white;
                margin-bottom: 10px;
                .chat-avatar {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background-color: #f2f3f4;
                    margin-right: 10px;
                }
            }
        }
    }
}
</style>
