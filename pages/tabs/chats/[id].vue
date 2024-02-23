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
            <div class="wrapper">
                <div class="messages">
                    <div
                        :class="[
                            'message',
                            { my: message.from_user.id === userData.id },
                        ]"
                        v-for="message in messages"
                        :key="message.id"
                    >
                        <div class="message__text">
                            {{ message.content }}
                        </div>
                        <div class="message__line">
                            <div class="date">
                                {{ message.creation_date }}
                            </div>
                            <div class="readed">
                                <Icon
                                    :name="
                                        message.readed
                                            ? 'material-symbols:done-all'
                                            : 'material-symbols:done'
                                    "
                                />
                            </div>
                        </div>
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
const { id } = useRoute().params;

const chat = await ChatsService.getChatChatsChatIdGet(id);
const toUser = getUserToId(userData.id, chat.user_1, chat.user_2);
const page = ref(1);
const messages = ref(
    await ChatsService.getMessagesChatsChatIdMessagesGet(id, page.value)
);
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

        .messages {
            display: flex;
            flex-direction: column;
            gap: 10px;
            .message {
                box-sizing: border-box;
                padding: 0.5rem 1rem;
                background: #fff;
                border-radius: 1.125rem 1.125rem 1.125rem 0;
                min-height: 2.25rem;
                width: fit-content;
                max-width: 66%;

                box-shadow: 0 0 2rem rgba(black, 0.075),
                    0rem 1rem 1rem -1rem rgba(black, 0.1);

                &.my {
                    margin-left: auto;
                    border-radius: 1.125rem 1.125rem 0 1.125rem;
                    background-color: $primary-text;
                    color: white;
                }
            }
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
    }
}
</style>
