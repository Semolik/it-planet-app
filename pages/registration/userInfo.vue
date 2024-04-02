<template>
    <ion-page>
        <app-registration-header
            :title="isUpdate ? 'Изменить данные' : 'Заполнить данные'"
        />
        <ion-content class="content">
            <template v-if="loading">
                <div class="wrapper loading">
                    <ion-spinner />
                </div>
            </template>
            <template v-else>
                <div class="wrapper" v-if="!currentVerificationRequest">
                    <white-button
                        class="reg-area-item"
                        @click="selectCityModalOpen = true"
                        black
                    >
                        {{ city ? "Изменить город" : "Выбрать город" }}
                        {{ city ? `(${city.name})` : "" }}
                    </white-button>
                    <white-button
                        @click="selectInstitutionModalOpen = true"
                        class="reg-area-item"
                        :disabled="!city"
                        black
                    >
                        {{
                            institution
                                ? "Изменить учреждение"
                                : "Выбрать учреждение"
                        }}
                        {{ institution ? `(${institution.name})` : "" }}
                    </white-button>
                    <white-button
                        class="reg-area-item"
                        @click="birthdateModalOpen = true"
                        black
                        v-if="isUpdate"
                    >
                        Изменить дату рождения ({{ birthdateString }})
                    </white-button>
                    <div class="field" v-if="isUpdate">
                        <div class="label">Имя</div>
                        <auth-input
                            class="reg-area-item"
                            v-model="name"
                            placeholder="Введите имя"
                        />
                    </div>
                    <app-input-file
                        is-image
                        label="Ваше фото"
                        @change="readPhoto = $event"
                    />
                    <app-input-file
                        label="Фото вашего студенческого"
                        @change="idPhoto = $event"
                    />

                    <select-modal-city
                        v-model:active="selectCityModalOpen"
                        v-model:city="city"
                    />
                    <select-modal-institution
                        v-model:active="selectInstitutionModalOpen"
                        :selectedInstitutions="institution ? [institution] : []"
                        @update:selected-institutions="institution = $event[0]"
                        :city-id="city?.id"
                        v-if="city"
                    />
                    <ion-popover
                        :isOpen="birthdateModalOpen"
                        mode="ios"
                        @ionPopoverDidDismiss="birthdateModalOpen = false"
                    >
                        <ion-datetime
                            @ionChange="birthdate = $event.detail.value"
                            :value="birthdate"
                            id="datetime"
                            presentation="date"
                        ></ion-datetime>
                    </ion-popover>
                    <white-button
                        class="reg-area-item submit"
                        @click="submit"
                        :disabled="!isActive"
                        black
                    >
                        Продолжить
                    </white-button>
                </div>
                <div class="wrapper" v-else>
                    <div class="info-text">
                        Ваша заявка на верификацию находится в обработке
                    </div>

                    <div class="info-table">
                        <div class="info-table-field">
                            <div class="info-table-field-label">Имя</div>
                            <div class="info-table-field-value">
                                {{ currentVerificationRequest.name }}
                            </div>
                        </div>
                        <div class="info-table-field">
                            <div class="info-table-field-label">
                                Дата рождения
                            </div>
                            <div class="info-table-field-value">
                                {{
                                    convertDate(
                                        currentVerificationRequest.birthdate
                                    )
                                }}
                            </div>
                        </div>
                        <div class="info-table-field">
                            <div class="info-table-field-label">Учреждение</div>
                            <div class="info-table-field-value">
                                {{
                                    currentVerificationRequest.institution.name
                                }}
                            </div>
                        </div>
                        <div class="info-table-field">
                            <div class="info-table-field-label">Город</div>
                            <div class="info-table-field-value">
                                {{
                                    currentVerificationRequest.institution.city
                                        .name
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="images">
                        <img
                            :src="currentVerificationRequest.real_photo"
                            class="photo"
                        />
                        <img
                            :src="currentVerificationRequest.id_photo"
                            class="photo"
                        />
                    </div>
                    <white-button
                        class="reg-area-item remove"
                        black
                        @click="deleteVerificationRequest"
                    >
                        Удалить
                    </white-button>
                </div>
            </template>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useAuthStore } from "~/stores/auth";
import { alertController } from "@ionic/vue";
import { VerificationService } from "@/client";
import { HandleAxiosError } from "~/composables/handleErrors";
const authStore = useAuthStore();
const { userData } = storeToRefs(authStore);
if (!userData.value) {
    const alert = await alertController.create({
        message: "Для изменения данных необходимо авторизоваться",
        htmlAttributes: {
            "aria-label": "alert dialog",
        },
    });
    alert.present();
    router.push("/login");
}
const readPhoto = ref(null);
const idPhoto = ref(null);
const router = useRouter();
const isUpdate = computed(() => router.currentRoute.value.query.update);
const selectCityModalOpen = ref(false);
const selectInstitutionModalOpen = ref(false);
const birthdateModalOpen = ref(false);
const city = ref(userData.value?.institution?.city || null);
const institution = ref(userData.value?.institution);
const birthdate = ref(userData.value?.birthdate.split("T")[0]);
const name = ref(userData.value?.name);
const convertDate = (date) => {
    if (!date) return "";
    return date.split("T")[0].split("-").reverse().join(".");
};
const birthdateString = computed(() => convertDate(birthdate.value));

watch(city, () => {
    institution.value = null;
});
const loading = ref(true);
const currentVerificationRequest = ref(null);
onMounted(async () => {
    currentVerificationRequest.value =
        await VerificationService.getUserVerificationRequestVerificationMeGet();
    loading.value = false;
});
const isActive = computed(
    () =>
        city.value &&
        institution.value &&
        birthdate.value &&
        readPhoto.value &&
        idPhoto.value
);
const submit = async () => {
    if (!isActive.value) return;
    try {
        const request =
            await VerificationService.createVerificationRequestVerificationPost(
                name.value,
                birthdate.value,
                institution.value.id,
                {
                    real_photo: readPhoto.value,
                    id_photo: idPhoto.value,
                }
            );
        const alert = await alertController.create({
            message: "Заявка на верификацию отправлена",
            buttons: ["OK"],
            htmlAttributes: {
                "aria-label": "alert dialog",
            },
        });
        alert.present();
        router.push(isUpdate ? "/tabs/profile" : "/");
        currentVerificationRequest.value = request;
    } catch (e) {
        const alert = await alertController.create({
            message: HandleAxiosError(e).message,
            htmlAttributes: {
                "aria-label": "alert dialog",
            },
        });
        alert.present();
    }
};
const deleteVerificationRequest = async () => {
    if (!currentVerificationRequest.value) return;

    try {
        await VerificationService.deleteVerificationRequestVerificationVerificationRequestIdDelete(
            currentVerificationRequest.value.id
        );
        currentVerificationRequest.value = null;
    } catch (e) {
        const alert = await alertController.create({
            message: HandleAxiosError(e).message,
            htmlAttributes: {
                "aria-label": "alert dialog",
            },
        });
        alert.present();
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
    flex-direction: column;
    padding: 10px;
    flex-grow: 1;
    gap: 10px;
    justify-content: center;
    height: 100%;

    &.loading {
        @include flex-center;
    }
    .info-text {
        font-size: 18px;
        text-align: center;
    }
    .images {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        .photo {
            width: 100%;
            object-fit: cover;
            border-radius: 10px;
        }
    }
    .info-table {
        display: flex;
        flex-direction: column;

        background-color: $secondary;
        color: $primary-text;
        border-radius: 10px;
        overflow: hidden;
        .info-table-field {
            display: grid;
            grid-template-columns: 1fr 1fr;
            .info-table-field-value,
            .info-table-field-label {
                padding: 10px;
            }

            .info-table-field-value {
                text-align: right;

                background-color: $tertiary;
            }

            &:not(:last-child) {
                border-bottom: 1px solid $primary;
            }
        }
    }

    .field {
        display: flex;
        flex-direction: column;
        gap: 5px;
        .label {
            font-size: 16px;
        }
    }
    .reg-area-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
        height: 46px;
        background-color: #f2f3f4;
        border-radius: 8px;
        &.submit {
            @include flex-center;
            margin-top: auto;
        }

        &.remove {
            color: $primary-text;
            text-align: center;
            @include flex-center;
        }
    }
}
</style>
