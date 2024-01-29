<template>
  <Swiper
    :modules="[SwiperPagination]"
    :slides-per-view="1"
    :loop="false"
    :pagination="true"
    :allow-touch-move="false"
    @swiper="handleSliderInit"
  >
    <div class="btn_prev" @click="handlePrev"></div>
    <div class="btn_next" @click="handleNext"></div>
    <SwiperSlide v-for="photo in card.photos" :key="photo" >
      <img :src="photo" />
    </SwiperSlide>
    <div class="name">{{ card.name }}</div>
  </Swiper>
</template>

<script setup>
defineProps(['card'])

// const images = [
//   "https://loremflickr.com/1000/1000/cats?random=1",
//   "https://loremflickr.com/1000/1000/cats?random=2",
//   "https://loremflickr.com/1000/1000/cats?random=3",
//   "https://loremflickr.com/1000/1000/cats?random=4",
//   "https://loremflickr.com/1000/1000/cats?random=5",
//   "https://loremflickr.com/1000/1000/cats?random=6",
// ]

const slider = ref()

const handleSliderInit = (instance) => {
  slider.value = instance
}

const handlePrev = () => {
  slider.value.slidePrev()
}

const handleNext = () => {
  slider.value.slideNext()
}

</script>

<style scoped lang="scss">

.name {
  position: absolute;
  z-index: 2;
  font-size: 48px;
  top: 50%;
  left: 5%;
}

.btn_prev {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 50%;
  // background-color: orangered;
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
  // background-color: royalblue;
  opacity: 0.3;
  z-index: 1;
  user-select: none;
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

:deep(.swiper-pagination-bullets) {
  bottom: auto;
  top: 5px;
  margin: 0;
  padding: 0 10px;
}

:deep(.swiper-pagination-bullet) {
  width: calc(100% / v-bind('card.photos.length'));
  border-radius: 0;
  --swiper-pagination-bullet-horizontal-gap: 0;
  --swiper-pagination-bullet-height: 5px;
}
</style>
