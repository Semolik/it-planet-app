<template>
  <div class="wrapper">
    <swiper
      :effect="'cards'"
      :modules="[EffectCards]"
      :observer="true"
      :observeParents="true"
    >
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
.wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.swiper {
  width: 85vw;
  height: calc(85vw / 9 * 16);
}
.slide {
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);
  border-radius: 20px;
}

.card {
  user-select: none;
  --swiper-theme-color: #f2f3f4;
}
</style>
