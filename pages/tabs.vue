<template>
    <ion-page>
      <ion-content>
        <ion-tabs>
          <ion-router-outlet />
          
          <ion-tab-bar slot="bottom">
            <ion-tab-button tab="chats" href="/tabs/chats">
              <ion-icon :icon="ioniconsChatbubblesOutline" />
              <ion-label>Chats</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="search" href="/tabs/search">
              <ion-icon :icon="ioniconsSearchOutline" />
              <ion-label>Search</ion-label>
            </ion-tab-button>
            <ion-tab-button tab="profile" href="/tabs/profile">
              <ion-icon :icon="ioniconsPersonOutline" />
              <ion-label>Profile</ion-label>
            </ion-tab-button>
          </ion-tab-bar>
        </ion-tabs>
      </ion-content>
    </ion-page>
  </template>