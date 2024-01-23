<template>
    <header class="header">
        <button class="header__btn">
            <ion-icon size="large" :icon="ioniconsNotificationsOutline" />
        </button>
        <div class="header__title">Frienda</div>
        <button class="header__btn">
            <ion-icon size="large" :icon="ioniconsOptionsOutline" />
        </button>
    </header>
</template>
  
<script setup>

</script>
  
<style scoped lang="scss">
.header {
    padding: 0 6vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #62A87C;
    color: #f2f3f4;

    &__title {
        font-family: 'Dancing Script', sans-serif;
        font-size: 40px;
    }

    &__btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;

        &:active {
            background-color: #56946d;
        }
    }
}
</style>