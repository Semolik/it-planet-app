<template>
    <ion-page>
        <app-header
            @options="filtersModalOpen = true"
            @notifications="() => $router.push('/tabs/notifications')"
        />
        <ion-content scrollY="false" class="content">
            <div class="toggle-wrapper">
                <div class="toggle-search">
                    <div
                        :class="['toggle-search__button', { active: isActive }]"
                        @click="isActive = true"
                    >
                        поиск
                    </div>
                    |
                    <div
                        :class="[
                            'toggle-search__button',
                            { active: !isActive },
                        ]"
                        @click="isActive = false"
                    >
                        лайки
                    </div>
                </div>
            </div>

            <recommendations
                v-if="isActive"
                :hobbies_ids="hobbies_ids"
                :institutions_ids="institutions_ids"
            />

            <liked v-else :only-matches="onlyMatches" />
            <ion-popover
                :is-open="filtersModalOpen"
                @ionPopoverDidDismiss="filtersModalOpen = false"
            >
                <div class="filters">
                    <div class="headline">Фильтры</div>
                    <div class="filters-content" v-if="isActive">
                        <div
                            @click="hobbiesSelectOpen = true"
                            class="filters-button"
                        >
                            Выбрать хобби
                            <template v-if="filters.hobbies.length > 0">
                                ({{ selectedHobbiesString }})
                            </template>
                        </div>
                        <hobbies-select
                            v-model:active="hobbiesSelectOpen"
                            :selected-hobbies="filters.hobbies"
                            used-by-users
                            @add:hobby="
                                (hobby) => {
                                    filters.hobbies.push(hobby);
                                }
                            "
                            @remove:hobby="
                                (hobby) => {
                                    filters.hobbies = filters.hobbies.filter(
                                        (h) => h.id !== hobby.id
                                    );
                                }
                            "
                        />
                        <div
                            class="no-institution"
                            v-if="!userData.institution"
                        >
                            Подтвердите профиль, чтобы выбрать институты
                        </div>

                        <div
                            @click="
                                () =>
                                    userData.institution &&
                                    (institutionsSelectOpen = true)
                            "
                            :class="[
                                'filters-button',
                                { disabled: !userData.institution },
                            ]"
                        >
                            <span class="text">
                                Выбрать институты
                                <template
                                    v-if="filters.institutions.length > 0"
                                >
                                    ({{ selectedInstitutionsString }})
                                </template>
                            </span>
                        </div>

                        <select-modal-institution
                            v-model:active="institutionsSelectOpen"
                            v-model:selected-institutions="filters.institutions"
                            :city-id="userData.institution.city.id"
                            v-if="userData.institution"
                        />

                        <div class="filters-button clear" @click="clearFilters">
                            Очистить фильтры
                        </div>
                    </div>
                    <div
                        class="filters-content"
                        v-else
                        @click="onlyMatches = !onlyMatches"
                    >
                        <UCheckbox
                            class="filters-button clear"
                            label="Показать только совпадения"
                            :checked="onlyMatches"
                        />
                    </div>
                </div>
            </ion-popover>
        </ion-content>
    </ion-page>
</template>

<script setup>
import { useAuthStore } from "~~/stores/auth";

const authStore = useAuthStore();
const { userData } = toRefs(authStore);
definePageMeta({
    alias: ["/"],
});
const onlyMatches = ref(false);
const hobbiesSelectOpen = ref(false);
const institutionsSelectOpen = ref(false);
const filtersModalOpen = ref(false);
const filters = reactive({
    hobbies: [],
    institutions: [],
});
const hobbies_ids = computed(() => filters.hobbies.map((hobby) => hobby.id));
const institutions_ids = computed(() =>
    filters.institutions.map((institution) => institution.id)
);
const clearFilters = () => {
    filters.hobbies = [];
    filters.institutions = [];
    filtersModalOpen.value = false;
};
const selectedHobbiesString = computed(() => {
    return filters.hobbies.map((hobby) => hobby.name).join(", ");
});
const selectedInstitutionsString = computed(() => {
    return filters.institutions
        .map((institution) => institution.name)
        .join(", ");
});

const isActive = ref(true);
</script>

<style scoped lang="scss">
.filters {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    .filters-content {
        display: flex;
        flex-direction: column;
        gap: 10px;

        .hobby {
            display: flex;
            padding: 10px;
        }

        .empty {
            @include flex-center;
            flex-grow: 1;
        }

        .filters-button {
            padding: 10px;
            background-color: $primary;
            color: $secondary;
            border-radius: 10px;
            text-align: center;

            &.clear {
                background-color: $tertiary;
                color: $primary-text;
            }

            &.disabled {
                background-color: $senary;
                color: $primary-text;
                .text {
                    opacity: 0.5;
                }
            }
        }

        .no-institution {
            font-size: 14px;
            text-align: center;
            color: $secondary-text;
        }
    }
}
.content {
    --background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
    height: 100%;
}

.toggle-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0;

    .toggle-search {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #f2f3f4;
        font-size: 24px;
        gap: 10px;

        &__button {
            opacity: 0.5;

            &.active {
                opacity: 1;
            }
        }
    }
}
</style>
