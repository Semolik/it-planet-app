<template>
    <ion-page>
        <app-header />
        <ion-content class="content">
            <div class="toggle-wrapper">
                <div class="toggle-search">
                    <div class="toggle-search__search" @click="toggleSearch">поиск</div>
                    |
                    <div class="toggle-search__likes" @click="toggleLikes">лайки</div>
                </div>
            </div>
            <div class="cards-wrapper">
                <app-search v-if="isActive" @dislike="dislike" @like="like" :searchCards="searchCards" />
                <app-search v-else @dislike="dislike" @like="like" :likesCards="likesCards" />
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup>
definePageMeta({
    alias: ["/"],
});
const searchCards = ref([
    {
        id: 1,
        name: "Рома",
        age: 21,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=1",
            "https://loremflickr.com/1000/1000/cats?random=2",
            "https://loremflickr.com/1000/1000/cats?random=3",
        ],
    },
    {
        id: 2,
        name: "Ярик",
        age: 20,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=4",
            "https://loremflickr.com/1000/1000/cats?random=5",
            "https://loremflickr.com/1000/1000/cats?random=6",
        ],
    },
    {
        id: 3,
        name: "Сема",
        age: 20,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=7",
            "https://loremflickr.com/1000/1000/cats?random=8",
            "https://loremflickr.com/1000/1000/cats?random=9",
        ],
    },
    {
        id: 4,
        name: "Бага",
        age: 20,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=10",
            "https://loremflickr.com/1000/1000/cats?random=11",
            "https://loremflickr.com/1000/1000/cats?random=12",
        ],
    },
    {
        id: 5,
        name: "Хуй",
        age: 99,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=13",
            "https://loremflickr.com/1000/1000/cats?random=14",
            "https://loremflickr.com/1000/1000/cats?random=15",
        ],
    },
]);

const likesCards = ref([
    {
        id: 6,
        name: "Таня",
        age: 20,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=16",
            "https://loremflickr.com/1000/1000/cats?random=17",
            "https://loremflickr.com/1000/1000/cats?random=18",
        ],
    },
    {
        id: 7,
        name: "Полина",
        age: 20,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=19",
            "https://loremflickr.com/1000/1000/cats?random=20",
            "https://loremflickr.com/1000/1000/cats?random=21",
        ],
    },
    {
        id: 8,
        name: "Катя",
        age: 19,
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce mauris.",
        photos: [
            "https://loremflickr.com/1000/1000/cats?random=22",
            "https://loremflickr.com/1000/1000/cats?random=23",
            "https://loremflickr.com/1000/1000/cats?random=24",
        ],
    },
]);

const isActive = ref(true);
const searchOpacity = ref(1);
const likesOpacity = ref(0.5);

const toggleSearch = () => {
    isActive.value = true;
    searchOpacity.value = 1;
    likesOpacity.value = 0.5;
}
const toggleLikes = () => {
    isActive.value = false;
    searchOpacity.value = 0.5;
    likesOpacity.value = 1;
}

const dislike = () => {
    if (isActive.value == true) {
        searchCards.value.shift();
    } else {
        likesCards.value.shift();
    }
};

const like = () => {
    if (isActive.value == true) {
        console.log("liked!");
    } else {
        console.log("liked too!");
    }
};
</script>

<style scoped lang="scss">
.content {
    --background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
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

        &__likes {
            padding-left: 20px;
            opacity: v-bind(likesOpacity);
        }

        &__search {
            padding-right: 20px;
            opacity: v-bind(searchOpacity);
        }
    }
}

.cards-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
}
</style>
