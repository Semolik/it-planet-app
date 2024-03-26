<template>
    <select-modal
        v-model:active="active"
        :fetch="fetchHobbies"
        title="Выберите интересы"
        :selected-items="selectedHobbies"
        @add="($event) => emit('add:hobby', $event)"
        @remove="($event) => emit('remove:hobby', $event)"
    />
</template>
<script setup>
import { HobbiesService } from "@/client";

const props = defineProps({
    active: Boolean,
    selectedHobbies: Array,
    usedByUsers: {
        type: Boolean,
        default: false,
    },
});
const emit = defineEmits(["update:active", "add:hobby", "remove:hobby"]);

const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
const fetchHobbies = async (page, search) => {
    return props.usedByUsers
        ? await HobbiesService.getHobbiesHobbiesGet(page, search)
        : await HobbiesService.getHobbiesHobbiesAllGet(page, search);
};
</script>
