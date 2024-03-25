<template>
    <div class="notify-card" :key="notification.id">
        <div class="header">
            <div class="title">{{ notification.header }}</div>
            <div class="date">{{ dateText }}</div>
        </div>
        <div class="body">{{ notification.message }}</div>
    </div>
</template>
<script setup>
const { notification } = defineProps({
    notification: {
        type: Object,
        required: true,
    },
});
const dateText = computed(() => {
    const date = new Date(notification.creation_date);
    return getDateText(date);
});
</script>
<style scoped lang="scss">
.notify-card {
    background-color: white;
    padding: 10px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    .header {
        display: flex;
        justify-content: space-between;
        .title {
            font-weight: bold;
        }
    }
}
</style>
