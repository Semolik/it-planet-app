<template>
  <div class="wrapper">
    <button-back />
    <div class="title">{{ title }}</div>
  </div>
</template>

<script setup>
defineProps(["title"]);

</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  width: 100%;
  background-color: $primary;

  .title {
    color: #f2f3f4;
    font-size: 24px;
  }
}
</style>
