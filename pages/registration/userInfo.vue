<template>
  <app-registration-header />
  <ion-content class="content">
    <div class="wrapper">
      <div class="reg-area">
        <div class="reg-area__city">
          Город
          <app-registration-select
            placeholder="Выберите город"
            :cities="cities"
          ></app-registration-select>
        </div>
        <div class="reg-area__university">
          Место учебы
          <app-registration-select
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

  
}


</style>
