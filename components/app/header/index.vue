<template>
  <header class="header">
    <app-header-button :icon="ioniconsNotificationsOutline" />
    <div class="header__title">Frienda</div>
    <app-header-button :icon="ioniconsOptionsOutline" />
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
.header {
  padding: 0 6vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #62a87c;
  color: #f2f3f4;

  &__title {
    font-family: "Dancing Script", sans-serif;
    font-size: 40px;
  }
}
</style>
