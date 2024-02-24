<template>
    <ion-page>
        <ion-content>
            <ion-tabs>
                <ion-router-outlet />
                <ion-tab-bar slot="bottom" v-show="!hideTabs">
                    <ion-tab-button tab="chats" href="/tabs/chats">
                        <ion-icon
                            size="large"
                            :icon="ioniconsChatbubblesOutline"
                        />
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
const router = useRouter();
const hideTabsRoutes = ["tabs-chats-id"];
const hideTabs = computed(() =>
    hideTabsRoutes.includes(router.currentRoute.value.name)
);
</script>
