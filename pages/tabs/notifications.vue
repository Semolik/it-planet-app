<template>
    <ion-page class="content">
        <app-registration-header title="Уведомления" />
        <ion-content class="content">
            <div class="wrapper" v-if="notifications.length > 0">
                <notification
                    v-for="notification in notifications"
                    :notification="notification"
                />
            </div>
            <div class="empty" v-else>У вас нет уведомлений</div>
            <ion-infinite-scroll @ionInfinite="fetchPage" :disabled="is_end">
                <ion-infinite-scroll-content />
            </ion-infinite-scroll>
        </ion-content>
    </ion-page>
</template>
<script setup>
import { NotificationsService } from "@/client";
import { useNotificationsStore } from "@/stores/notifications";
const notificationsStore = useNotificationsStore();
const notifications = ref([]);
const page = ref(0);
await notificationsStore.readNotifications();
const is_end = ref(false);
const fetchPage = async (ev) => {
    if (is_end.value) {
        ev?.target?.complete();
        return;
    }
    page.value++;
    const newNotifications =
        await NotificationsService.getNotificationsNotificationsGet(page.value);
    if (newNotifications.length === 0) {
        is_end.value = true;
    } else {
        notifications.value = [...notifications.value, ...newNotifications];
    }
    ev?.target?.complete();
};
fetchPage();
</script>
<style lang="scss" scoped>
.content {
    --background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }

    .empty {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        color: white;
    }
}
</style>
