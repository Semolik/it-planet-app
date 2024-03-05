import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";

export const useChatsStore = defineStore({
    id: "chats",
    state: () => ({
        page: 1,
        disconnect: null,
        updateSubscribers: [],
        unreadChats: [],
    }),
    getters: {
        currentUserId() {
            const { userData } = useAuthStore();
            return userData.id;
        },
        unreadChatsCount() {
            return this.unreadChats.length;
        },
    },
    actions: {
        readChat(chatId) {
            this.unreadChats = this.unreadChats.filter(
                (chat) => chat.id !== chatId
            );
        },
        async subscribeToWebSocket(updateSubscriber) {
            if (!this.disconnect) {
                const { wsURL } = useRuntimeConfig().public;
                const { disconnect } = useWebsocket(
                    `${wsURL}/chats/ws`,
                    (event) => {
                        const chatData = JSON.parse(event.data);
                        if (
                            chatData.from_user !== this.currentUserId &&
                            !this.unreadChats.find(
                                (chat) => chat.id === chatData.id
                            )
                        ) {
                            this.unreadChats.push(chatData);
                        }
                        this.updateSubscribers.forEach((subscriber) =>
                            subscriber(chatData)
                        );
                    }
                );
                this.disconnect = disconnect;
            }

            this.updateSubscribers.push(updateSubscriber);
        },

        disconnectWebSocket() {
            if (this.disconnect) {
                this.disconnect();
            }
        },
    },
});
