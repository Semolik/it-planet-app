<template>
  <ion-page>
    <main-header />
    <ion-content class="content">
      <div class="wrapper">
        <div class="profile-avatar-wrapper">
          <div class="profile-avatar">
            <input type="file" />
          </div>
          <div class="user-name">Qislord</div>
        </div>
        <div class="profile-inputs">
          <div class="inputs">
            <span>Совпадения</span>
            <Icon name="material-symbols:arrow-forward-ios-rounded"></Icon>
          </div>
          <div class="inputs">
            <span>Понравившиеся пользователи</span>
            <Icon name="material-symbols:arrow-forward-ios-rounded"></Icon>
          </div>
          <div class="inputs">
            <span>Обновить данные</span>
            <Icon name="material-symbols:arrow-forward-ios-rounded"></Icon>
          </div>
          <div class="inputs">
            <span>Изменить почту</span>
            <Icon name="material-symbols:arrow-forward-ios-rounded"></Icon>
          </div>
          <div class="hobbies">
            <div class="hobby" v-for="hobby in hobbies">
              {{ hobby.name }}
            </div>
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { HobbiesService } from "@/client";
const hobbies = await HobbiesService.getMyHobbiesHobbiesMyGet();
</script>

<style scoped lang="scss">
.content {
  --background: linear-gradient(
      180deg,
      #62a87c,
      color-mix(in srgb, #62a87c, #f2f3f4)
    )
    no-repeat;
  .wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    padding-inline: 15px;
    gap: 20px;
    .profile-avatar-wrapper {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      gap: 15px;
      .profile-avatar {
        width: 180px;
        height: 180px;
        outline: 2px dashed #f2f3f4;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        input {
          position: absolute;
          inset: 0;
          opacity: 0;
        }
      }
      .user-name {
        display: flex;
        color: #f2f3f4;
        font-size: 20px;
        font-weight: 600;
        letter-spacing: 3px;
      }
    }
    .profile-inputs {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 20px;
      .inputs {
        display: flex;
        align-items: center;
        width: 100%;
        padding: 10px 15px;
        border-radius: 15px;
        font-size: 20px;
        border: 1px solid #f2f3f4;
        color: #5f5f5f;
        background: white;
        justify-content: space-between;
      }
    }
  }
}
</style>
