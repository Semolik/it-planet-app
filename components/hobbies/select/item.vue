<template>
    <ion-item>
        <ion-checkbox
            @ionChange="
                (e) => emit('change', { hobby, checked: e.detail.checked })
            "
            :checked="isSelected"
        >
            {{ hobby.name }}
        </ion-checkbox></ion-item
    >
</template>
<script setup>
const { selectedHobbies, hobby } = defineProps({
    hobby: Object,
    selectedHobbies: Array,
});
const emit = defineEmits(["change"]);
const isSelected = computed(() => {
    return selectedHobbies.map((hobby) => hobby.id).includes(hobby.id);
});
</script>
