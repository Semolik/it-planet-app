<template>
    <ion-popover
        :is-open="newChatModalOpen"
        @ionPopoverDidDismiss="newChatModalOpen = false"
    >
        <div class="new-chat-modal">
            <div class="headline">Написать сообщение</div>
            <app-input
                v-model="newChatMessage"
                placeholder="Введите сообщение"
            />
            <UButton
                label="Отправить"
                size="lg"
                block
                :disabled="!newChatMessage"
                @click="createChat"
            />
        </div>
    </ion-popover>
</template>
<script setup>
import { ChatsService } from "@/client";
const props = defineProps({
    active: Boolean,
    toUserId: String,
});
const emit = defineEmits(["update:active"]);
const newChatModalOpen = computed({
    get: () => props.active,
    set: (value) => emit("update:active", value),
});
const newChatMessage = ref("");
watch(newChatModalOpen, (value) => {
    if (value) {
        newChatMessage.value = "";
    }
});
const router = useRouter();
const createChat = async () => {
    if (!newChatMessage.value) {
        return;
    }
    const chat = await ChatsService.createChatChatsPost(
        newChatMessage.value,
        props.toUserId
    );
    router.push(`/tabs/chats/${chat.id}`);
    newChatModalOpen.value = false;
};
</script>
<style scoped lang="scss">
.new-chat-modal {
    padding: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;

    .headline {
        font-size: 20px;
        text-align: center;
    }
}
</style>
