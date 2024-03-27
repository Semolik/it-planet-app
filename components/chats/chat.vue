<template>
    <nuxt-link class="chat" :key="chat.id" :to="`/tabs/chats/${chat.id}`">
        <div class="image">
            <img :src="toUser.image" alt="" v-if="toUser?.image" />
            <div class="chat-avatar" v-else>
                <Icon name="material-symbols:account-circle" />
            </div>
        </div>
        <div class="chat-content">
            <div class="line">
                <div class="chat-name">{{ toUser.name }}</div>
                <div class="chat-date">
                    {{ dateText }}
                </div>
            </div>
            <div class="line">
                <div class="chat-message">{{ chat.last_message.content }}</div>
                <div class="read-mark">
                    <Icon
                        :name="
                            chat.last_message.read
                                ? 'material-symbols:done-all'
                                : 'material-symbols:done'
                        "
                    />
                </div>
            </div>
        </div>
    </nuxt-link>
</template>
<script setup>
import { computed, toRefs } from "vue";
const { chat, currentUserId } = defineProps({
    chat: {
        type: Object,
        required: true,
    },
    currentUserId: {
        type: String,
        required: true,
    },
});
const toUser = computed(() =>
    chat.user_id_1 === currentUserId ? chat.user_2 : chat.user_1
);
watch(chat, (value) => {
    console.log(value);
});
const dateText = computed(() => {
    const date = new Date(chat.last_message.creation_date);
    return getDateText(date);
});
</script>
<style scoped lang="scss">
.chat {
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    color: $primary-text;
    gap: 10px;
    .image {
        width: 55px;
        height: 55px;
        border-radius: 50%;
        overflow: hidden;
        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .chat-avatar {
            border-radius: 50%;
            width: 55px;
            height: 55px;
            background-color: #f2f3f4;

            @include flex-center;

            svg {
                width: 30px;
                height: 30px;
            }
        }
    }

    .chat-content {
        display: flex;
        flex-direction: column;
        flex-grow: 1;
        margin-right: 5px;
        gap: 5px;
        .line {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .chat-name {
                font-weight: bold;
            }

            .chat-message {
                color: $secondary-text;
                @include clip-text(1);
            }

            .chat-date {
                color: $secondary-text;
                font-size: 12px;
            }

            .read-mark {
                svg {
                    width: 20px;
                    height: 20px;
                    color: $secondary-text;
                }
            }
        }
    }
}
</style>
