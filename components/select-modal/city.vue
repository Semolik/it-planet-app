<template>
    <select-modal
        v-model:active="active"
        :fetch="fetchCities"
        :title="'Выберите город'"
        :selectedItems="city ? [city] : []"
        @add="emit('update:city', $event)"
        @remove="
            (removed_city) => {
                if (city && city.id === removed_city.id) {
                    emit('update:city', null);
                }
            }
        "
        single
    />
</template>
<script setup>
import { CitiesService } from "@/client";
const props = defineProps({
    active: Boolean,
    city: Object,
});
const emit = defineEmits(["update:active", "update:city"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
const fetchCities = async (page, search) => {
    return await CitiesService.getCitiesLocationsCitiesGet(search, page);
};
</script>
