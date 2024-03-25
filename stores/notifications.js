import { defineStore } from "pinia";
import { useAuthStore } from "@/stores/auth";
import { NotificationsService } from "@/client";

export const useNotificationsStore = defineStore({
    id: "notifications",
    state: () => ({
        disconnect: null,
        updateSubscribers: [],
        unreadNotifications: [],
        started: false,
    }),
    getters: {
        currentUserId() {
            const { userData } = useAuthStore();
            return userData.id;
        },
        unreadNotificationsCount() {
            if (!this.started) {
                this.initNotifications();
            }
            return this.unreadNotifications.length;
        },
    },
    actions: {
        async readNotifications() {
            await NotificationsService.readNotificationNotificationsReadPost();
            this.unreadNotifications = [];
        },
        async subscribeToWebSocket(updateSubscriber) {
            if (!this.disconnect) {
                const { wsURL } = useRuntimeConfig().public;
                const { disconnect } = useWebsocket(
                    `${wsURL}/notifications/ws`,
                    (event) => {
                        const chatData = JSON.parse(event.data);
                        this.unreadNotifications.push(chatData);
                        this.updateSubscribers.forEach((subscriber) =>
                            subscriber(chatData)
                        );
                    }
                );
                this.disconnect = disconnect;
            }
            if (updateSubscriber) {
                this.updateSubscribers.push(updateSubscriber);
            }
        },
        async initNotifications() {
            this.unreadNotifications =
                await NotificationsService.getUnreadNotificationsNotificationsUnreadGet();
            this.started = true;
            return this.unreadNotifications;
        },
        disconnectWebSocket() {
            if (this.disconnect) {
                this.disconnect();
            }
        },
    },
});
