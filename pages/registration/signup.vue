<template>
  <app-registration-header />
  <ion-content class="content">
    <div class="wrapper">
      <div class="reg-area">
        <div class="reg-area__tip">
          <div class="reg-area__tip_enter">Введите email</div>
          <Transition>
            <div class="reg-area__tip_warning" v-show="isEmailWarning">
              Некорректный email
            </div>
          </Transition>
        </div>
        <auth-input class="reg-area__input" v-model="email" placeholder="Email"></auth-input>
        <div class="reg-area__tip">
          <div class="reg-area__tip_enter">Придумайте пароль</div>
          <Transition>
            <div class="reg-area__tip_warning" v-show="isPasswordWarning">
              Короткий пароль
            </div>
          </Transition>
        </div>
        <auth-input class="reg-area__input" v-model="password" type="password" placeholder="Пароль"></auth-input>
        <div class="reg-area__tip">
          <div class="reg-area__tip_enter">Повторите пароль</div>
          <Transition>
            <div class="reg-area__tip_warning" v-show="isPasswordRepeatWarning">
              Пароли не совпадают
            </div>
          </Transition>
        </div>
        <auth-input class="reg-area__input" v-model="passwordRepeat" type="password"
          placeholder="Повторите пароль"></auth-input>
      </div>
      <ion-nav-link router-direction="forward" :component="component">
        <white-button class="btn-continue" >Продолжить</white-button>
      </ion-nav-link>
    </div>
  </ion-content>
</template>

<script setup>
import userInfo from '@/pages/registration/userInfo.vue';

const component = ref(markRaw(userInfo));

const email = ref("");
const password = ref("");
const passwordRepeat = ref("");
//:disabled="!isActive"
// const isEmailWarning = computed(
//   () => !email.value.includes("@") && email.value != 0
// );

// const isPasswordWarning = computed(
//   () => password.value.length < 8 && password.value.length != 0
// );

// const isPasswordRepeatWarning = computed(
//   () => passwordRepeat.value != password.value && passwordRepeat.value != 0
// );

// const isActive = computed(
//   () =>
//     password.value == passwordRepeat.value &&
//     password.value &&
//     email.value.includes("@")
// );
</script>

<style scoped lang="scss">
.content {
  font-size: 18px;
  --color: #f2f3f4;
  --background: linear-gradient(180deg, #62a87c, #72b189) no-repeat;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 5vw;
}

.reg-area {
  width: 100%;
  height: 100%;
  padding: 40% 0 50px;

  &__tip {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    &_warning {
      font-size: 14px;
      color: #111111;
      opacity: 0.5;
      padding-bottom: 1px;
    }
  }

  &__input {
    margin-bottom: 10px;
  }
}

.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

ion-nav-link {
  width: 100%;
}

.btn-continue {
  width: 100%;
  height: 46px;
}
</style>
