<template>
  <ion-page>
    <app-header />
    <ion-content class="content">
      <app-search-swiper class="asd" :cards="cards" />
    </ion-content>
  </ion-page>
</template>

<script setup>
// import "swiper/css";
// import "swiper/css/effect-cards";

const cards = [
  {
    id: 1,
    name: "Roma",
    age: 21,
    description: "some desc",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=1",
      "https://loremflickr.com/1000/1000/cats?random=2",
      "https://loremflickr.com/1000/1000/cats?random=3",
    ],
  },
  {
    id: 2,
    name: "Yarik",
    age: 20,
    description: "some desc",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=4",
      "https://loremflickr.com/1000/1000/cats?random=5",
      "https://loremflickr.com/1000/1000/cats?random=6",
    ],
  },
  {
    id: 3,
    name: "Sema",
    age: 20,
    description: "some desc",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=7",
      "https://loremflickr.com/1000/1000/cats?random=8",
      "https://loremflickr.com/1000/1000/cats?random=9",
    ],
  },
  {
    id: 4,
    name: "Baga",
    age: 20,
    description: "some desc",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=10",
      "https://loremflickr.com/1000/1000/cats?random=11",
      "https://loremflickr.com/1000/1000/cats?random=12",
    ],
  },
  {
    id: 5,
    name: "Xyu",
    age: 99,
    description: "some desc",
    photos: [
      "https://loremflickr.com/1000/1000/cats?random=13",
      "https://loremflickr.com/1000/1000/cats?random=14",
      "https://loremflickr.com/1000/1000/cats?random=15",
    ],
  },
];
</script>

<style scoped lang="scss">
.content {
  --background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
}

.asd {
  display: flex;
}
// .wrapper {
//   overflow: hidden;
//   background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
//   width: 100%;
//   height: 100%;
// }


// .mySwiper {
//   width: 200px;
//   height: 400px;
// }



// :deep(.card) {
//   transform: none;
// }
// .card:nth-child(2) {
//   z-index: 4;
// }
// .card:nth-child(3) {
//   z-index: 3;
// }
// .card:nth-child(4) {
//   z-index: 2;
// }
// .card:nth-child(5) {
//   z-index: 1;
// }
</style>
