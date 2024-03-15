<template>
    <ion-item>
        <ion-checkbox
            @ionChange="
                (e) => emit('change', { item, checked: e.detail.checked })
            "
            :checked="isSelected"
        >
            {{ name }}
        </ion-checkbox></ion-item
    >
</template>
<script setup>
const { selectedItems, item, getName } = defineProps({
    item: Object,
    selectedItems: Array,
    getName: Function,
});
const name = computed(() => getName(item));
const emit = defineEmits(["change"]);
const isSelected = computed(() => {
    return selectedItems.map((item) => item.id).includes(item.id);
});
</script>
