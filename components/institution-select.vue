<template>
    <select-modal
        v-model:active="active"
        :fetch="fetchHobbies"
        title="Выберите институты"
        v-model:selected-items="selectedInstitutions"
        @add="addInstitution"
        @remove="removeInstitution"
        :single="single"
    />
</template>
<script setup>
import { InstitutionsService } from "@/client";
const props = defineProps({
    active: Boolean,
    selectedInstitutions: Array,
    cityId: String,
    single: Boolean,
});
const { selectedInstitutions, cityId, single } = toRefs(props);
const emit = defineEmits(["update:active", "update:selectedInstitutions"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
const addInstitution = (institution) => {
    emit(
        "update:selectedInstitutions",
        single.value
            ? [institution]
            : [...selectedInstitutions.value, institution]
    );
};
const removeInstitution = (institution) => {
    emit(
        "update:selectedInstitutions",
        selectedInstitutions.value.filter((i) => i.id !== institution.id)
    );
};
const fetchHobbies = async (page, search) => {
    return await InstitutionsService.getInstitutionsLocationsInstitutionsGet(
        cityId.value,
        search,
        page
    );
};
</script>
