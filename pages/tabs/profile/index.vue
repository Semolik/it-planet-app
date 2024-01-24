<template>
  <ion-page>
    <main-header />
    <ion-content>
      <div class="wrapper">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar"></div>
        </div>
        <auth-input v-model="login"></auth-input>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
const login = ref("");
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px;
  gap: 15px;
  .profile-avatar-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    .profile-avatar {
      width: 150px;
      height: 150px;
      border: 2px dashed #000;
      border-radius: 50%;
    }
  }
}
</style>
