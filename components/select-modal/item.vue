<template>
    <ion-item>
        <ion-checkbox
            :class="{ single: single }"
            mode="ios"
            @ionChange="
                (e) => emit('change', { item, checked: e.detail.checked })
            "
            :checked="isSelected"
        >
            {{ name }}
        </ion-checkbox>
    </ion-item>
</template>
<script setup>
const props = defineProps({
    item: Object,
    selectedItems: Array,
    getName: Function,
    single: Boolean,
});
const { selectedItems, item } = toRefs(props);
const name = computed(() => props.getName(item.value));
const emit = defineEmits(["change"]);
const isSelected = computed(() => {
    return selectedItems.value.map((item) => item.id).includes(item.value.id);
});
</script>
