<template>
  <Swiper class="swiper" :modules="[SwiperPagination]" :slides-per-view="1" :loop="false" :pagination="true"
    :allow-touch-move="false" @swiper="handleSliderInit">
    <div class="btn_prev" @click="handlePrev"></div>
    <div class="btn_next" @click="handleNext"></div>
    <SwiperSlide class="slide" v-for="photo in card.photos" :key="photo">
      <img :src="photo" />
    </SwiperSlide>
    <div class="user-info" @click="toggleInfo">
      <div class="user-info__name">{{ card.name }}, {{ card.age }}</div>
      <div class="user-info__desc">{{ card.description }}</div>
    </div>
  </Swiper>
</template>

<script setup>
defineProps(["card"]);

const slider = ref();
const infoHeightCoeff = ref(0.7);
const infoTopCoeff = ref(1);

const handleSliderInit = (instance) => {
  slider.value = instance;
};

const handlePrev = () => {
  slider.value.slidePrev();
};

const handleNext = () => {
  slider.value.slideNext();
};

const toggleInfo = () => {
  if (infoHeightCoeff.value === 0.7) {
    infoHeightCoeff.value = 0;
    infoTopCoeff.value = 7;
  } else {
    infoHeightCoeff.value = 0.7;
    infoTopCoeff.value = 1;
  }
}
</script>

<style scoped lang="scss">
.swiper {
  user-select: none;
  --swiper-theme-color: #f2f3f4;
  border-radius: 25px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
}

.btn_prev {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50%;
  opacity: 0.3;
  z-index: 1;
  user-select: none;
}

.btn_next {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 50%;
  right: 0;
  opacity: 0.3;
  z-index: 1;
  user-select: none;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.user-info {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: calc(100% * v-bind(infoHeightCoeff));
  background-color: #11111141;
  z-index: 2;
  color: #f2f3f4;
  padding: calc(1% * v-bind(infoTopCoeff)) 4%;
  transition: 0.45s;
  backdrop-filter: blur(5px);

  &__name {
    font-size: 24px;
  }

  &__desc {
    font-size: 16px;
  }
}

:deep(.swiper-pagination-bullets) {
  bottom: auto;
  top: 5px;
  margin: 0;
  padding: 0 10px;
}

:deep(.swiper-pagination-bullet) {
  width: calc(100% / v-bind("card.photos.length"));
  border-radius: 50px;
  --swiper-pagination-bullet-horizontal-gap: 0;
  --swiper-pagination-bullet-height: 5px;
}
</style>
