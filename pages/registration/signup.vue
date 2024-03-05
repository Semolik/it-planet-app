<template>
  <ion-page>
    <app-registration-header />
    <ion-content class="content">
      <div class="wrapper">
        <div class="reg-area">
          Имя
          <auth-input
            class="reg-area__input"
            v-model="name"
            placeholder="Введите имя"
          ></auth-input>
          <div class="reg-area__tip">
            <div class="reg-area__tip_enter">Введите email</div>
            <Transition>
              <div class="reg-area__tip_warning" v-show="isEmailWarning">
                Некорректный email
              </div>
            </Transition>
          </div>
          <auth-input
            class="reg-area__input"
            v-model="email"
            placeholder="Email"
          ></auth-input>
          <div class="reg-area__tip">
            <div class="reg-area__tip_enter">Придумайте пароль</div>
            <Transition>
              <div class="reg-area__tip_warning" v-show="isPasswordWarning">
                Короткий пароль
              </div>
            </Transition>
          </div>
          <auth-input
            class="reg-area__input"
            v-model="password"
            type="password"
            placeholder="Пароль"
          ></auth-input>
          <div class="reg-area__tip">
            <div class="reg-area__tip_enter">Повторите пароль</div>
            <Transition>
              <div
                class="reg-area__tip_warning"
                v-show="isPasswordRepeatWarning"
              >
                Пароли не совпадают
              </div>
            </Transition>
          </div>
          <auth-input
            class="reg-area__input"
            v-model="passwordRepeat"
            type="password"
            placeholder="Повторите пароль"
          ></auth-input>
        </div>
        <white-button
          @click="sendData"
          :disabled="!isActive"
          class="btn-continue"
          >Продолжить</white-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import { useAuthStore } from "~~/stores/auth";
import { alertController } from "@ionic/vue";

const authStore = useAuthStore();
const name = ref("");
const email = ref("");
const password = ref("");
const passwordRepeat = ref("");

const isEmailWarning = computed(
  () => !email.value.includes("@") && email.value != 0
);

const isPasswordWarning = computed(
  () => password.value.length < 8 && password.value.length != 0
);

const isPasswordRepeatWarning = computed(
  () => passwordRepeat.value != password.value && passwordRepeat.value != 0
);

const isActive = computed(
  () =>
    name.value != 0 &&
    password.value == passwordRepeat.value &&
    password.value &&
    email.value.includes("@")
);

const sendData = async () => {
  if (!isActive.value) return;
  const error = await authStore.registerRequest(
    email.value,
    password.value,
    name.value
  );
  if (error) {
    const alert = await alertController.create({
      message: HandleOpenApiError(error).message,
      htmlAttributes: {
        "aria-label": "alert dialog",
      },
    });
    alert.present();
  } else {
    const router = useRouter();
    router.push("/registration/userinfo");
  }
};
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