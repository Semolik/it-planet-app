<template>
    <ion-page>
        <app-header />
        <ion-content class="content">
            <div class="wrapper"></div>
        </ion-content>
    </ion-page>
</template>
<script setup></script>
<style scoped lang="scss">
.content {
    --background: #{$secondary};
    .wrapper {
        padding: 10px;
        display: flex;

        flex-direction: column;
        gap: 10px;
    }
}
</style>
