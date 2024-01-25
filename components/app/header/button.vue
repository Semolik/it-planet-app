<template>
    <ion-button v-bind="$attrs" shape="round">
      <ion-icon 
        v-bind="$attrs"
        size="large"
        color="light"
        aria-hidden="true"
      />
    </ion-button>
</template>

<script setup>

</script>

<style scoped lang="scss">
ion-button {
    --border-radius: 50%;
    width: 40px;
    height: 40px;
    --padding-start: 0;
    --padding-end: 0;
    --box-shadow: none;
}

</style>