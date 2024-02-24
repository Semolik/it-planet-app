<template>
    <ion-page class="page-chat-messages">
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
        <div class="wrapper">
            <div class="messages">
                <chats-message
                    :message="message"
                    v-for="message in messages"
                    :key="message.id"
                    :from-me="message.from_user.id === userData.id"
                />
            </div>
            <div class="send-message">
                <auth-input
                    v-model="newMessage"
                    placeholder="Введите сообщение"
                />
                <div class="send">
                    <Icon name="material-symbols:send" @click="sendMessage" />
                </div>
            </div>
        </div>
    </ion-page>
</template>
<script setup>
import { ChatsService } from "@/client";
import { useAuthStore } from "~/stores/auth";
const { userData } = useAuthStore();
const router = useRouter();
const { id } = router.currentRoute.value.params;
const newMessage = ref("");

const chat = await ChatsService.getChatChatsChatIdGet(id);
const toUser = getUserToId(userData.id, chat.user_1, chat.user_2);
const page = ref(1);
const messages = ref(
    await ChatsService.getMessagesChatsChatIdMessagesGet(id, page.value)
);
const { wsURL } = useRuntimeConfig().public;
const { disconnect } = useWebsocket(
    `${wsURL}/chats/${id}/messages/ws`,
    (event) => {
        const messageData = JSON.parse(event.data);
        messages.value = messages.value.map((message) =>
            message.id === messageData.id ? messageData : message
        );
    }
);
watch(router.currentRoute, disconnect);
const sending = ref(false);
const sendMessage = async () => {
    if (!newMessage.value || sending.value) return;
    sending.value = true;
    messages.value.push(
        await ChatsService.sendMessageChatsChatIdMessagesPost(
            id,
            newMessage.value
        )
    );
    newMessage.value = "";
    sending.value = false;
};
</script>
<style scoped lang="scss">
.page-chat-messages {
    background-color: $secondary;
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

        .messages {
            display: flex;
            flex-direction: column;
            gap: 10px;
            flex-grow: 1;
        }

        .input {
            box-sizing: border-box;
            flex-basis: 4rem;
            flex-shrink: 0;
            display: flex;
            align-items: center;
            padding: 0 0.5rem 0 1.5rem;

            i {
                font-size: 1.5rem;
                margin-right: 1rem;

                cursor: pointer;
                transition: color 200ms;
            }

            input {
                border: none;
                background-image: none;
                background-color: white;
                padding: 0.5rem 1rem;
                margin-right: 1rem;
                border-radius: 1.125rem;
                flex-grow: 2;
                box-shadow: 0 0 1rem rgba(black, 0.1),
                    0rem 1rem 1rem -1rem rgba(black, 0.2);

                font-family: Red hat Display, sans-serif;
                font-weight: 400;
                letter-spacing: 0.025em;
            }
        }
        .send-message {
            display: grid;
            grid-template-columns: 1fr auto;
            gap: 10px;
            .send {
                @include flex-center;
                background-color: $primary;
                border-radius: 50%;
                width: 40px;
                height: 40px;
                svg {
                    width: 15px;
                    height: 15px;
                    color: white;
                }
            }
        }
    }
}
</style>
