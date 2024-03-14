<template>
    <ion-modal ref="modal" :is-open="active">
        <ion-header>
            <ion-toolbar>
                <ion-title> Выберите хобби </ion-title>
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
                    v-model="search"
                    placeholder="Поиск"
                ></ion-searchbar
                ><ion-list>
                    <hobbies-select-item
                        v-for="hobby in hobbies"
                        :key="hobby.id"
                        :hobby="hobby"
                        @change="onChange"
                        :selected-hobbies="selectedHobbies"
                    />
                </ion-list>

                <div class="empty" v-if="hobbies.length === 0">
                    Ничего не найдено
                </div>
                <ion-infinite-scroll
                    @ionInfinite="ionInfinite"
                    position="top"
                    :disabled="is_end"
                >
                    <ion-infinite-scroll-content
                        class="scorll-animaton"
                    ></ion-infinite-scroll-content>
                </ion-infinite-scroll>
            </div>
        </ion-content>
    </ion-modal>
</template>
<script setup>
import { HobbiesService } from "@/client";

const props = defineProps({
    active: Boolean,
    selectedHobbies: Array,
});
const { selectedHobbies } = toRefs(props);
const emit = defineEmits(["update:active", "add:hobby", "remove:hobby"]);
const active = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});

const modal = ref();
const search = ref("");
const hobbies = ref(await HobbiesService.getHobbiesHobbiesGet(1));
const is_end = ref(false);
const page = ref(1);
watch(search, async (value) => {
    page.value = 1;
    is_end.value = false;
    hobbies.value = await HobbiesService.getHobbiesHobbiesGet(
        page.value,
        value || null
    );
});
const onChange = ({ hobby, checked }) => {
    if (checked) {
        emit("add:hobby", hobby);
    } else {
        emit("remove:hobby", hobby);
    }
};
const ionInfinite = async (ev) => {
    if (is_end.value) {
        ev.target.complete();
        return;
    }
    page.value++;
    const newHobbies = await HobbiesService.getHobbiesHobbiesGet(
        page.value,
        search.value || null
    );
    if (newHobbies.length === 0) {
        is_end.value = true;
    } else {
        hobbies.value = [...hobbies.value, ...newHobbies];
    }
    ev.target.complete();
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

        .hobby {
            display: flex;
            padding: 10px;
        }

        .empty {
            @include flex-center;
            flex-grow: 1;
        }
    }
}
</style>
