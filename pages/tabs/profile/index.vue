<template>
    <ion-page class="page">
        <ion-content class="content">
            <div class="wrapper">
                <app-header hideButtons />
                <div class="profile-avatar-wrapper">
                    <app-input-image
                        :image="authStore.userData?.image"
                        @change="onChangeImage"
                    />
                    <div class="message" v-if="!userData.image">
                        Без фото вы не попадете в рекомендации
                    </div>
                    <div class="user-name">{{ authStore.userData?.name }}</div>
                </div>
                <div class="profile-inputs">
                    <nuxt-link
                        :to="{
                            name: 'registration-userInfo',
                            query: { update: true },
                        }"
                        class="inputs"
                    >
                        <span>Обновить данные</span>
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </nuxt-link>
                    <div
                        class="inputs"
                        @click="updateProfileDescriptionModalOpened = true"
                    >
                        <span>Изменить описание профиля</span>
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </div>
                    <div class="inputs" @click="updateEmailModalOpened = true">
                        <span>Изменить почту</span>
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </div>
                    <div
                        class="inputs"
                        @click="updatePasswordModalOpened = true"
                    >
                        <span>Изменить пароль</span>
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </div>

                    <div
                        class="hobbies-container"
                        @click="hobbiesSelectOpen = true"
                    >
                        <div class="headline">
                            <div class="text">Интересы</div>
                            <div class="button">
                                <Icon
                                    name="material-symbols:arrow-forward-ios"
                                ></Icon>
                            </div>
                        </div>
                        <div class="hobbies" v-if="userData.hobbies.length > 0">
                            <hobbies-item
                                v-for="hobby in userData.hobbies"
                                :hobby="hobby"
                            />
                        </div>
                    </div>
                    <div class="inputs" @click="logout">
                        <span>Выйти</span>
                        <Icon name="material-symbols:logout"></Icon>
                    </div>
                    <hobbies-select
                        v-model:active="hobbiesSelectOpen"
                        :selected-hobbies="userData.hobbies"
                        @add:hobby="
                            async (hobby) => await authStore.addHobby(hobby.id)
                        "
                        @remove:hobby="
                            async (hobby) =>
                                await authStore.removeHobby(hobby.id)
                        "
                    />
                    <update-mail-modal
                        v-model:active="updateEmailModalOpened"
                    />
                    <update-password-modal
                        v-model:active="updatePasswordModalOpened"
                    />
                    <update-description-modal
                        v-model:active="updateProfileDescriptionModalOpened"
                    />
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { UsersService } from "@/client";
import { useAuthStore } from "~/stores/auth";
const updateEmailModalOpened = ref(false);
const updatePasswordModalOpened = ref(false);
const updateProfileDescriptionModalOpened = ref(false);
const authStore = useAuthStore();
const hobbiesSelectOpen = ref(false);
const { userData } = storeToRefs(authStore);
const logout = () => {
    authStore.logout();
    const router = useRouter();
    router.push("/auth");
};
const onChangeImage = async (blob) => {
    const imageData = await UsersService.updateUserMeImageUsersMeImagePut({
        userPicture: blob,
    });
    userData.value.image = imageData.url;
};
</script>

<style scoped lang="scss">
.content {
    .wrapper {
        display: flex;
        flex-direction: column;

        padding-inline: 15px;
        gap: 20px;
        padding-bottom: 10px;
        background: linear-gradient(
                180deg,
                #62a87c,
                color-mix(in srgb, #62a87c, #f2f3f4)
            )
            no-repeat;
        min-height: 100%;
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
            .message {
                color: $secondary;
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
            .hobbies-container {
                width: 100%;
                background-color: white;
                padding: 10px;
                border-radius: 15px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: $tertiary-text;
                .headline {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .text {
                        font-size: 20px;
                        color: $tertiary-text;
                    }
                    .button {
                        background-color: white;
                        @include flex-center;
                        border-radius: 50%;
                        width: 30px;
                        height: 30px;
                        font-size: 20px;
                        svg {
                            width: 20px;
                            height: 20px;
                            color: $tertiary-text;
                        }
                    }
                }

                .hobbies {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 5px;
                }
            }
        }
    }
}
</style>
