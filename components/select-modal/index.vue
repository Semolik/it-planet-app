<template>
    <ion-modal ref="modal" :is-open="active" mode="ios">
        <ion-header>
            <ion-toolbar>
                <ion-title>
                    {{ title }}
                </ion-title>
                <ion-buttons slot="end">
                    <ion-button :strong="true" @click="active = false">
                        Готово
                    </ion-button>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content class="content">
            <div class="wrapper">
                <ion-searchbar
                    mode="ios"
                    v-model="search"
                    placeholder="Поиск"
                />
                <ion-list>
                    <select-modal-item
                        v-for="item in items"
                        :key="item.id"
                        :item="item"
                        @change="onChange"
                        :selected-items="selectedItems"
                        :get-name="getName"
                        :single="single"
                    />
                </ion-list>
                <div v-if="items.length === 0" class="empty">
                    <template v-if="!loading">
                        {{ search ? "Ничего не найдено" : "Список пуст" }}
                    </template>
                    <ion-spinner v-else></ion-spinner>
                </div>

                <ion-infinite-scroll
                    @ionInfinite="ionInfinite"
                    :disabled="is_end"
                >
                    <ion-infinite-scroll-content />
                </ion-infinite-scroll>
            </div>
        </ion-content>
    </ion-modal>
</template>
<script setup>
const props = defineProps({
    active: Boolean,
    selectedItems: Array,
    fetch: Function,
    title: String,
    getName: {
        type: Function,
        default: (item) => item.name,
    },
    single: {
        type: Boolean,
        default: false,
    },
});
const loading = ref(true);
const { selectedItems } = toRefs(props);
const emit = defineEmits(["update:active", "add", "remove"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});

const modal = ref();
const search = ref("");
const items = ref([]);
watch(active, async (value) => {
    if (value) {
        loading.value = true;
        items.value = [];
        items.value = await props.fetch(1);
        loading.value = false;
    }
});
const is_end = ref(false);
const page = ref(1);
watch(search, async (value) => {
    loading.value = true;
    items.value = [];
    page.value = 1;
    is_end.value = false;
    items.value = await props.fetch(page.value, value);
    loading.value = false;
});
const onChange = ({ item, checked }) => {
    if (checked) {
        emit("add", item);
    } else {
        emit("remove", item);
    }
};
const ionInfinite = async (ev) => {
    if (is_end.value) {
        ev.target.complete();
        return;
    }
    page.value++;
    loading.value = true;
    const newitems = await props.fetch(page.value, search.value);
    if (newitems.length === 0) {
        is_end.value = true;
    } else {
        items.value = [...items.value, ...newitems];
    }
    ev.target.complete();
    loading.value = false;
};
</script>
<style scoped lang="scss">
.content {
    .wrapper {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;

        .empty {
            @include flex-center;
            flex-grow: 1;
        }
    }
}
</style>
