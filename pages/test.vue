<template>
  <ion-page>
    <app-header />
    <ion-content class="content">
      <div class="wrapper">
        <app-search :cards="cards" />
        <div class="btns">
          <app-search-button
            class="btns_dislike"
            color="light"
            :icon="ioniconsThumbsDownSharp"
            @click="dislike"
          />
          <app-search-button
            class="btns_like"
            color="light"
            :icon="ioniconsThumbsUpSharp"
            @click="like"
          />
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
const cards = ref([
  {
    id: 1,
    name: "Рома",
    age: 21,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=1",
      "https://loremflickr.com/1000/1000/cats?random=2",
      "https://loremflickr.com/1000/1000/cats?random=3",
    ],
  },
  {
    id: 2,
    name: "Ярик",
    age: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=4",
      "https://loremflickr.com/1000/1000/cats?random=5",
      "https://loremflickr.com/1000/1000/cats?random=6",
    ],
  },
  {
    id: 3,
    name: "Сема",
    age: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=7",
      "https://loremflickr.com/1000/1000/cats?random=8",
      "https://loremflickr.com/1000/1000/cats?random=9",
    ],
  },
  {
    id: 4,
    name: "Бага",
    age: 20,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=10",
      "https://loremflickr.com/1000/1000/cats?random=11",
      "https://loremflickr.com/1000/1000/cats?random=12",
    ],
  },
  {
    id: 5,
    name: "Хуй",
    age: 99,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=13",
      "https://loremflickr.com/1000/1000/cats?random=14",
      "https://loremflickr.com/1000/1000/cats?random=15",
    ],
  },
]);

const dislike = () => {
  cards.value.shift();
};

const like = () => {
  console.log("liked!");
};
</script>

<style scoped lang="scss">
.content {
  --background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
}
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.btns {
  position: absolute;
  bottom: 0;
  top: 85%;
  right: 0;
  left: 0;
  z-index: 5;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20% 5%;

  &_like,
  &_dislike {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background-color: #f2f3f4;
    box-shadow: 0 0 7px #5f5f5f;
  }
}
</style>
