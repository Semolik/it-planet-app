<template>
  <ion-page>
    <app-header hideButtons />
    <ion-content class="content">
      <div class="wrapper">
        <auth-input
          v-model="search"
          placeholder="Найти свой интересик"
        ></auth-input>
      </div>
    </ion-content>
  </ion-page>
</template>
<script setup>
import { HobbiesService } from "@/client";
const loadMore = ref(true);
const page = ref(1);
const search = ref("");
const hobbies = ref([]);
watch(
  search,
  async (value) => {
    page.value = 1;
    if (value) {
      loadMore.value = false;
    } else {
      loadMore.value = true;
    }
    hobbies.value = await HobbiesService.getHobbiesHobbiesGet(
      page.value,
      value
    );
  },
  { immediate: true }
);
watch(page, async (value) => {
  const newHobbies = await HobbiesService.getHobbiesHobbiesGet(
    page.value,
    value
  );
  hobbies.value = [...hobbies.value, ...newHobbies];
  loadMore.value = newHobbies.length === 0;
});
</script>
<style scoped lang="scss">
.content {
  --background: linear-gradient(
      180deg,
      #62a87c,
      color-mix(in srgb, #62a87c, #f2f3f4)
    )
    no-repeat;
  .wrapper {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
    padding-inline: 10px;
    gap: 20px;
  }
}
</style>
