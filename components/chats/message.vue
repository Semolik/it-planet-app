<template>
    <div :class="['message', { my: fromMe }]" :key="message.id">
        <div class="message__text">
            {{ message.content }}
        </div>
        <div class="message__line">
            <div class="date">
                {{ dateText }}
            </div>
            <Icon
                v-if="fromMe"
                :name="
                    message.readed
                        ? 'material-symbols:done-all'
                        : 'material-symbols:done'
                "
            />
        </div>
    </div>
</template>
<script setup>
const { message } = defineProps({
    message: {
        type: Object,
        required: true,
    },
    fromMe: {
        type: Boolean,
        default: false,
    },
});
const dateText = computed(() => {
    const date = new Date(message.creation_date);
    return getDateText(date);
});
</script>
<style scoped lang="scss">
.message {
    padding: 0.5rem 0.8rem;
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 1.125rem 1.125rem 1.125rem 0;
    width: fit-content;
    max-width: 66%;

    box-shadow: 0 0 2rem rgba(black, 0.075),
        0rem 1rem 1rem -1rem rgba(black, 0.1);
    .message__line {
        margin-right: auto;
        margin-left: 0px;
    }
    &.my {
        margin-left: auto;
        border-radius: 1.125rem 1.125rem 0 1.125rem;
        background-color: $primary;
        color: white;

        .message__line {
            margin-left: auto;
            margin-right: 0px;
        }
    }

    .message__text {
        word-wrap: break-word;
    }

    .message__line {
        @include flex-center;
        gap: 5px;
        .date {
            font-size: 0.75rem;
        }

        svg {
            width: 15px;
            height: 15px;
        }
    }
}
</style>
