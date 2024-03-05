<template>
    <ion-page class="page-chat-messages" fullscreen>
        <ion-popover
            :is-open="moreMenuOpen"
            @ionPopoverDidDismiss="moreMenuOpen = false"
            :dismiss-on-select="true"
        >
            <div class="more-menu">
                <nuxt-link :to="`/tabs/users/${toUser.id}`" class="button">
                    Открыть профиль
                </nuxt-link>
                <div class="button" @click="deleteAlertOpen = true">
                    Удалить чат
                </div>
            </div>
        </ion-popover>
        <ion-alert
            :is-open="deleteAlertOpen"
            header="Удалить чат"
            :buttons="deleteAlertButtons"
        ></ion-alert>
        <div class="head">
            <nuxt-link class="back" to="/tabs/chats">
                <Icon name="material-symbols:arrow-back-ios-rounded" />
                <span> Назад </span>
            </nuxt-link>
            <nuxt-link :to="`/tabs/users/${toUser.id}`">
                {{ toUser.name }}
            </nuxt-link>
            <div class="more" @click="moreMenuOpen = !moreMenuOpen">
                <Icon name="material-symbols:more-horiz" />
            </div>
        </div>
        <ion-content>
            <ion-infinite-scroll
                @ionInfinite="ionInfinite"
                position="top"
                :disabled="is_end"
            >
                <ion-infinite-scroll-content
                    class="scorll-animaton"
                ></ion-infinite-scroll-content>
            </ion-infinite-scroll>
            <ion-list class="messages" ref="messagesContainer">
                <chats-message
                    :message="message"
                    v-for="message in messages"
                    :key="message.id"
                    :from-me="message.from_user.id === userData.id"
                />
            </ion-list>
        </ion-content>
        <div class="send-message">
            <auth-input v-model="newMessage" placeholder="Введите сообщение" />
            <div class="send">
                <Icon name="material-symbols:send" @click="sendMessage" />
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
const { wsURL } = useRuntimeConfig().public;
const messagesContainer = ref(null);
const scrollToBottom = () => {
    messagesContainer.value.scrollTop = messagesContainer.value.scrollHeight;
};

const moreMenuOpen = ref(false);
const newMessage = ref("");
const chat = await ChatsService.getChatChatsChatIdGet(id);
const toUser = getUserToId(userData.id, chat.user_1, chat.user_2);
const page = ref(1);
const messages = ref(
    (
        await ChatsService.getMessagesChatsChatIdMessagesGet(id, page.value)
    ).reverse()
);
const deleteAlertOpen = ref(false);
const deleteAlertButtons = [
    {
        text: "Отмена",
        role: "cancel",
        handler: () => {
            deleteAlertOpen.value = false;
        },
    },
    {
        text: "Удалить",
        role: "confirm",
        handler: async () => {
            await ChatsService.deleteChatChatsChatIdDelete(id);
            router.push("/tabs/chats");
        },
    },
];
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
const is_end = ref(false);
const ionInfinite = async (ev) => {
    if (is_end.value) {
        ev.target.complete();
        return;
    }
    const new_messages = await ChatsService.getMessagesChatsChatIdMessagesGet(
        id,
        ++page.value
    );
    if (new_messages.length === 0) {
        is_end.value = true;
        ev.target.complete();
        return;
    }
    messages.value = [...new_messages.reverse(), ...messages.value];
    ev.target.complete();
};
const sendMessage = async () => {
    if (!newMessage.value) return;
    messages.value.push(
        await ChatsService.sendMessageChatsChatIdMessagesPost(
            id,
            newMessage.value
        )
    );
    newMessage.value = "";
    scrollToBottom();
};
</script>
<style scoped lang="scss">
ion-popover {
    --backdrop-opacity: 0.6;
    --width: 80vw;
    --background: transparent;
    .more-menu {
        display: flex;
        flex-direction: column;
        gap: 2px;
        background-color: $secondary;
        .button {
            background-color: white;
            padding: 10px;
            text-align: center;
            color: black;
            text-decoration: none;
        }
    }
}

.scorll-animaton {
    background-color: $secondary;
}
.page-chat-messages {
    --overflow: hidden;
    .head {
        display: flex;
        background-color: white;
        align-items: center;
        justify-content: space-between;
        gap: 10px;
        padding: 5px;
        height: 55px;
        a {
            color: $primary-text;

            text-decoration: none;
        }
        .more {
            @include flex-center;
            svg {
                width: 20px;
                height: 20px;
            }
            margin-right: 10px;
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

    .messages {
        display: flex;
        flex-direction: column;
        gap: 10px;
        background-color: $secondary;
        padding: 10px;
        min-height: 100%;
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
        padding: 10px;
        padding-top: 5px;
        border-top: 1px solid $quaternary;
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
</style>
