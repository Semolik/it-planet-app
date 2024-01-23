<template>
  <ion-page>
    <main-header />
    <ion-content>
      <div class="wrapper">
        <div id="swiper">
          <div class="card" style="--i:0">
            <img src="https://source.unsplash.com/random/1000x1000/?forest" alt="">
          </div>
          <div class="card" style="--i:1">
            <img src="https://source.unsplash.com/random/1000x1000/?landscape" alt="">
          </div>
          <div class="card" style="--i:2">
            <img src="https://source.unsplash.com/random/1000x1000/?ocean" alt="">
          </div>
          <div class="card" style="--i:3">
            <img src="https://source.unsplash.com/random/1000x1000/?moutain" alt="">
          </div>
          <div class="card" style="--i:4">
            <img src="https://source.unsplash.com/random/1000x1000/?sky" alt="">
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>

</script>

<style scoped lang="scss">
.wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(180deg, #62A87C, #f2f3f4) no-repeat;
}

#swiper {
  width: 88vw;
  aspect-ratio: 9 / 16;
  perspective: 450px;
  // perspective-origin: center 50%;
  transform-style: preserve-3d;
  // position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.card {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 20px;
  overflow: hidden;
  transform: translateZ(calc(-30px * var(--i)));
  filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
  user-select: none;
  transition: transform 0.5s;
}

.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>