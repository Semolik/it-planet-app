<template>
    <app-registration-header />
    <ion-content class="content">
        <div class="wrapper">
            <div class="reg-area">
                Имя
                <auth-input placeholder="Введите имя"></auth-input>
                Дата рождения
                <div class="reg-area__birth-date">
                    <ion-datetime-button
                        class="reg-area__birth-date__btn"
                        datetime="datetime"
                    ></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                        <ion-datetime
                            id="datetime"
                            presentation="date"
                            :prefer-wheel="true"
                            max="2008-12-31T23:59:59"
                        ></ion-datetime>
                    </ion-modal>
                </div>
                <div class="reg-area__city">
                    Город
                    <app-registration-select
                        aria-label="City"
                        placeholder="Выберите город"
                        :cities="cities"
                    ></app-registration-select>
                </div>
                <div class="reg-area__university">
                    Место учебы
                    <app-registration-select
                        aria-label="University"
                        placeholder="Выберите университет"
                        :universities="universities"
                    ></app-registration-select>
                </div>
            </div>
        </div>
    </ion-content>
</template>

<script setup>
const cities = ref(["Барнаул", "Бийск", "Новосибирск", "Рубцовск"]);

const universities = ref([
    "АлтГУ",
    "АлтГТУ",
    "РАНХиГС",
    "АГМУ",
    "АлтГПУ",
    "АлтГУ(филиал)",
    "НГУ",
    "НГТУ",
    "НГАСУ(Сибстрин)",
    "СибГУТИ",
    "СГУПС",
    "АлтГУ(филиал)",
    "РИИ",
]);
</script>

<style scoped lang="scss">
ion-button {
    --color: #62a87c;
    --background: #f2f3f4;
    --border-radius: 8px;
    height: 46px;
}

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

    &__birth-date {
        display: flex;

        &__btn {
            color: #111111;
            background-color: #62a87c;
            border-radius: 8px;
            font-size: 18px;
            height: 46px;
            justify-content: flex-start;
            width: 100%;
        }
    }
}

ion-datetime-button::part(native) {
    color: #5f5f5f;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    font-size: 24px;
    margin: 0;
    padding: 5px 10px;
    height: 46px;
}
</style>
