<template>
    <ion-page>
        <app-header />
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
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </div>
                    <div class="inputs">
                        <span>Понравившиеся пользователи</span>
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </div>
                    <div class="inputs">
                        <span>Обновить данные</span>
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </div>
                    <div class="inputs">
                        <span>Изменить почту</span>
                        <Icon
                            name="material-symbols:arrow-forward-ios-rounded"
                        ></Icon>
                    </div>
                    <div class="inputs" @click="logout">
                        <span>Выйти</span>
                        <Icon name="material-symbols:logout"></Icon>
                    </div>
                    <nuxt-link
                        class="hobbies-container"
                        to="/tabs/profile/hobbies"
                    >
                        <div class="headline">
                            <div class="text">Интересы</div>
                            <div class="button">
                                <Icon
                                    name="material-symbols:arrow-forward-ios"
                                ></Icon>
                            </div>
                        </div>
                        <div class="hobbies">
                            <hobbies-item
                                v-for="hobby in hobbies"
                                :hobby="hobby"
                            />
                        </div>
                    </nuxt-link>
                </div>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { HobbiesService } from "@/client";
import { useAuthStore } from "~/stores/auth";
const authStore = useAuthStore();
const hobbies = await HobbiesService.getMyHobbiesHobbiesMyGet();
const logout = () => {
    authStore.logout();
    const router = useRouter();
    router.push("/auth");
};
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
            .hobbies-container {
                background-color: rgba($color: white, $alpha: 0.3);
                padding: 10px;
                border-radius: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                color: $primary-text;
                .headline {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;

                    .text {
                        font-size: 20px;
                        color: $primary-text;
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
                            color: $primary-text;
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
