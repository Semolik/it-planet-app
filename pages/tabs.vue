<template>
  <ion-page>
    <ion-content>
      <ion-tabs>
        <ion-router-outlet />

        <ion-tab-bar slot="bottom">
          <ion-tab-button tab="chats" href="/tabs/chats">
            <ion-icon size="large" :icon="ioniconsChatbubblesOutline" />
            <!-- <ion-label>Чаты</ion-label> -->
          </ion-tab-button>
          <ion-tab-button tab="search" href="/tabs/search">
            <ion-icon size="large" :icon="ioniconsSearchOutline" />
            <!-- <ion-label>Поиск</ion-label> -->
          </ion-tab-button>
          <ion-tab-button tab="profile" href="/tabs/profile">
            <ion-icon size="large" :icon="ioniconsPersonOutline" />
            <!-- <ion-label>Профиль</ion-label> -->
          </ion-tab-button>
        </ion-tab-bar>
      </ion-tabs>
    </ion-content>
  </ion-page>
</template>

<script setup>

</script>