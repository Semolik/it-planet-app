<template>
    <ion-page>
        <ion-content>
            <ion-tabs>
                <ion-router-outlet />
                <ion-tab-bar slot="bottom" v-show="!hideTabs">
                    <ion-tab-button tab="chats" href="/tabs/chats">
                        <div class="tab">
                            <span
                                v-if="chatsStore.unreadChatsCount"
                                class="badge"
                            >
                                {{ chatsStore.unreadChatsCount }}
                            </span>
                            <ion-icon
                                size="large"
                                :icon="ioniconsChatbubblesOutline"
                            />
                        </div>
                    </ion-tab-button>
                    <ion-tab-button tab="search" href="/tabs/search">
                        <ion-icon size="large" :icon="ioniconsSearchOutline" />
                    </ion-tab-button>
                    <ion-tab-button tab="profile" href="/tabs/profile">
                        <ion-icon size="large" :icon="ioniconsPersonOutline" />
                    </ion-tab-button>
                </ion-tab-bar>
            </ion-tabs>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { useChatsStore } from "~/stores/chats";
const chatsStore = useChatsStore();
const router = useRouter();
const hideTabsRoutes = ["tabs-chats-id"];
const hideTabs = computed(() =>
    hideTabsRoutes.includes(router.currentRoute.value.name)
);
</script>

<style scoped lang="scss">
.tab {
    position: relative;
    isolation: isolate;
    .badge {
        z-index: 1;
        width: 18px;
        height: 18px;
        background-color: var(--ion-color-danger);
        color: white;
        border-radius: 50%;
        position: absolute;
        top: -5px;
        right: -5px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
    }
}
</style>
