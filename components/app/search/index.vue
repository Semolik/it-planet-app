<template>
  <app-search-card
    v-for="card in cards"
    class="card"
    :card="card"
    :key="card.id"
  />
  <div class="btns">
    <app-search-button
      class="btns_dislike"
      color="light"
      :icon="ioniconsThumbsDownSharp"
      @click="decide('dislike', $event)"
    />
    <app-search-button
      class="btns_like"
      color="light"
      :icon="ioniconsThumbsUpSharp"
      @click="decide('like', $event)"
    />
  </div>
</template>

<script setup>
const props = defineProps(["cards"]);
const emit = defineEmits(["dislike", "like"]);

const cardProperties = reactive({
  scale: 0.9,
  shift: 0,
  opacity: 1,
});

const isActiveButton = ref(true);
const decide = (choice, event) => {
  if (isActiveButton.value) {
    isActiveButton.value = false;
    cardProperties.scale = 1;
    cardProperties.opacity = 0;
    if (choice === "dislike") {
      cardProperties.shift = "-200px";
      setTimeout(() => {
        emit("dislike", event.target.value);
        cardProperties.scale = 0.9;
        cardProperties.shift = 0;
        cardProperties.opacity = 1;
        isActiveButton.value = true;
      }, 300);
    } else if (choice === "like") {
      cardProperties.shift = "200px";
      setTimeout(() => {
        emit("like", event.target.value);
        cardProperties.scale = 0.9;
        cardProperties.shift = 0;
        cardProperties.opacity = 1;
        isActiveButton.value = true;
      }, 300);
    }
  }
};
</script>

<style scoped lang="scss">
.card {
  width: 88vw;
  height: calc(88vw / 9 * 16);
  position: absolute;
  transition: 0.3s;
  transform: translateX(v-bind("cardProperties.shift"));
  opacity: v-bind("cardProperties.opacity");
  z-index: 5;

  &:nth-child(2n) {
    opacity: 1;
    transform: translateX(0);
    z-index: 4;
    scale: v-bind("cardProperties.scale");
  }

  &:nth-child(3n) {
    opacity: 1;
    transform: translateX(0);
    z-index: 3;
    scale: 0.8;
  }

  &:nth-child(4n) {
    opacity: 1;
    transform: translateX(0);
    z-index: 2;
    scale: 0.7;
  }

  &:nth-child(5n) {
    opacity: 1;
    transform: translateX(0);
    z-index: 1;
    scale: 0.6;
  }
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
