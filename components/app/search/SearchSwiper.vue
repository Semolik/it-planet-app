<template>
  <div class="wrapper">
    <swiper effect="cards" :modules="[EffectCards]">
      <swiper-slide class="slide" v-for="card in cards" :key="card.id">
        <app-search-card class="card" :card="card" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectCards } from "swiper/modules";

defineProps(["cards"]);
</script>

<style scoped lang="scss">

// .swiper-wrapper {
//     width: 88vw;
//     height: calc(88vw / 9 * 16);
// }
// .wrapper {
    // width: 88vw;
    // height: calc(88vw / 9 * 16);
// }

.swiper {
    width: 88vw;
    height: calc(88vw / 9 * 16);
//     width: 350px;
//     height: 600px;
}

.slide {
  // width: 88vw;
  // height: calc(88vw / 9 * 16);
  //   display: flex;
  //   align-items: center;
  //   justify-content: center;
  //   border-radius: 20px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

.card {
  // width: 88%;
  // height: 100%;
  // top: 0;
  // left: 0;
  // bottom: 0;
  // right: 0;
  // width: 250px;
  // height: 250px;
  // position: absolute;
  // border-radius: 20px;
  // overflow: hidden;
  // transform: translateZ(calc(-30px * 1));
  // filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
  user-select: none;
  // transition: 0.3s;
  // display: flex;
  --swiper-theme-color: #f2f3f4;
  // z-index: 5;
}
</style>
