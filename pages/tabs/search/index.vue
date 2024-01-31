<template>
  <ion-page>
    <app-header />
    <ion-content class="content">
      <app-search-swiper :cards="cards" />
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
</script>

<style scoped lang="scss">
.content {
  --background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
}
</style>
