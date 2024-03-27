<template>
    <div class="liked-page">
        <div class="wrapper">
            <liked-card
                v-for="like in likes"
                :key="like.liked_user.id"
                :user="like.liked_user"
                @like="() => toggleLike(like.liked_user)"
                :liked="like.is_liked"
                :is_match="like.is_match"
            />
        </div>
        <div class="empty" v-if="!likes.length && !loading">
            Вы еще никого не лайкнули
        </div>
        <div class="empty" v-if="loading">
            <ion-spinner />
        </div>

        <ion-infinite-scroll @ionInfinite="fetchPage" :disabled="is_end">
            <ion-infinite-scroll-content />
        </ion-infinite-scroll>
    </div>
</template>
<script setup>
import { UsersService, LikesService } from "@/client";
const props = defineProps({
    onlyMatches: Boolean,
});
const loading = ref(true);
const likes = ref([]);
const page = ref(0);
const is_end = ref(false);
const toggleLike = async (user) => {
    let liked;
    likes.value = likes.value.map((like) => {
        if (like.liked_user.id === user.id) {
            like.is_liked = !like.is_liked;
            liked = like.is_liked;
        }
        return like;
    });
    if (liked) {
        await UsersService.likeUserUsersUserIdLikePost(user.id);
    } else {
        await UsersService.dislikeUserUsersUserIdDislikePost(user.id);
    }
};
const fetchPage = async (ev) => {
    if (is_end.value) {
        ev?.target?.complete();
        return;
    }
    page.value++;
    const newLikes = props.onlyMatches
        ? await LikesService.getMatchesLikesMatchesGet(page.value)
        : await LikesService.getLikesLikesGet(page.value);
    if (newLikes.length === 0) {
        is_end.value = true;
    } else {
        likes.value = [...likes.value, ...newLikes];
    }
    ev?.target?.complete();
};
fetchPage().then(() => {
    loading.value = false;
});

watch(props, () => {
    page.value = 0;
    is_end.value = false;
    likes.value = [];
    loading.value = true;
    fetchPage().then(() => {
        loading.value = false;
    });
});
</script>
<style lang="scss" scoped>
.content {
    --background: linear-gradient(180deg, #62a87c, #f2f3f4) no-repeat;
    display: flex;
    flex-direction: column;
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: 10px;
        padding: 10px;
    }
}
.empty {
    height: 100%;
    @include flex-center;
}

.liked-page {
    display: flex;
    flex-direction: column;
}
</style>
