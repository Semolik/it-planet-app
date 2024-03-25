<template>
    <recommendations-card
        class="card"
        :user="recommendedUser"
        :key="recommendedUser.id"
    />
    <div class="btns">
        <recommendations-button
            class="btns_dislike"
            color="light"
            :icon="ioniconsThumbsDownSharp"
            @click="decide('dislike', $event)"
        />
        <recommendations-button
            class="btns_like"
            color="light"
            :icon="ioniconsThumbsUpSharp"
            @click="decide('like', $event)"
        />
    </div>
</template>

<script setup>
import { UsersService } from "@/client";
const props = defineProps({
    hobbies_ids: {
        type: Array,
        required: true,
    },
    institutions_ids: {
        type: Array,
        required: true,
    },
});
const { hobbies_ids, institutions_ids } = toRefs(props);
const cardProperties = reactive({
    scale: 0.9,
    shift: 0,
    opacity: 1,
});
const recommendedUser = ref(
    await UsersService.getRecommendedUsersRecommendedGet(
        hobbies_ids.value,
        institutions_ids.value
    )
);
const fetchNextUser = async () => {
    recommendedUser.value =
        await UsersService.getRecommendedUsersRecommendedGet(
            hobbies_ids.value,
            institutions_ids.value
        );
};
watch(
    [hobbies_ids, institutions_ids],
    () => {
        fetchNextUser();
    },
    { deep: true }
);

const isActiveButton = ref(true);
const decide = async (choice, event) => {
    if (isActiveButton.value) {
        isActiveButton.value = false;
        cardProperties.scale = 1;
        cardProperties.opacity = 0;
        if (choice === "dislike") {
            await UsersService.dislikeUserUsersUserIdDislikePost(
                recommendedUser.value.id
            );
            fetchNextUser().then(() => {
                cardProperties.shift = "-200px";
                setTimeout(() => {
                    cardProperties.scale = 0.9;
                    cardProperties.shift = 0;
                    cardProperties.opacity = 1;
                    isActiveButton.value = true;
                }, 300);
            });
        } else if (choice === "like") {
            const like = await UsersService.likeUserUsersUserIdLikePost(
                recommendedUser.value.id
            );
            if (like.is_match) {
                const alert = await alertController.create({
                    message: "Достигнуто взаимное совпадение!",
                    htmlAttributes: {
                        "aria-label": "alert dialog",
                    },
                    buttons: [
                        {
                            text: "Перейти в профиль",
                            handler: () => {
                                const router = useRouter();
                                router.push(
                                    "/tabs/users/" + like.liked_user_id
                                );
                            },
                        },
                    ],
                });
                alert.present();
            }
            fetchNextUser().then(() => {
                cardProperties.shift = "200px";
                setTimeout(() => {
                    cardProperties.scale = 0.9;
                    cardProperties.shift = 0;
                    cardProperties.opacity = 1;
                    isActiveButton.value = true;
                }, 300);
            });
        }
    }
};
</script>

<style scoped lang="scss">
.card {
    width: 88vw;
    height: 75vh;
    position: absolute;
    transition: 0.3s;
    transform: translateX(v-bind("cardProperties.shift"));
    opacity: v-bind("cardProperties.opacity");
    z-index: 5;

    &:nth-child(2n) {
        opacity: 1;
        transform: translateX(0);
        z-index: 4;
        scale: v-bind("cardProperties.scale");
    }

    &:nth-child(3n) {
        opacity: 1;
        transform: translateX(0);
        z-index: 3;
        scale: 0.8;
    }

    &:nth-child(4n) {
        opacity: 1;
        transform: translateX(0);
        z-index: 2;
        scale: 0.7;
    }

    &:nth-child(5n) {
        opacity: 1;
        transform: translateX(0);
        z-index: 1;
        scale: 0.6;
    }
}

.btns {
    position: absolute;
    bottom: 0;
    top: 85%;
    right: 0;
    left: 0;
    z-index: 5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20% 5%;

    &_like,
    &_dislike {
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #f2f3f4;
        box-shadow: 0 0 7px #5f5f5f;
    }
}
</style>
