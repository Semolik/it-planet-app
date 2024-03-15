<template>
    <select-modal
        v-model:active="active"
        :fetch="fetchHobbies"
        title="Выберите институты"
        :selected-items="selectedInstitutions"
        @add="addInstitution"
        @remove="removeInstitution"
    />
</template>
<script setup>
import { InstitutionsService } from "@/client";
const props = defineProps({
    active: Boolean,
    selectedInstitutions: Array,
    cityId: String,
});
const { selectedInstitutions, cityId } = toRefs(props);
const emit = defineEmits(["update:active", "update:selectedInstitutions"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
const addInstitution = (institution) => {
    emit("update:selectedInstitutions", [
        ...selectedInstitutions.value,
        institution,
    ]);
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
