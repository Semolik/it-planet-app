<template>
    <div class="app-input-file">
        <div class="label" v-if="label">
            {{ label }}
        </div>
        <div :class="['app-input-file__image-container', { active: filename }]">
            <div class="app-input-file__image-placeholder">
                {{ filename || "Выберите файл" }}
            </div>
            <input
                ref="inputRef"
                type="file"
                :accept="isImage ? 'image/*' : '*/*'"
                @change="onFileChange"
                class="app-input-file__input"
            />
        </div>
    </div>
</template>
<script setup>
const emit = defineEmits(["change"]);
const { $toast } = useNuxtApp();
const { isImage } = defineProps({
    isImage: {
        type: Boolean,
        default: false,
    },
    label: {
        type: String,
        default: null,
    },
});
const filename = ref(null);
const onFileChange = (e) => {
    const files = e.target.files;
    if (!files.length) return;
    const file = files[0];
    if (
        isImage &&
        (!file.type.startsWith("image/") || file.type.indexOf("svg+xml") > -1)
    ) {
        $toast.error("Этот тип файла не поддерживается");
        return;
    }
    filename.value = file.name;
    emit("change", file);
};
</script>
<style lang="scss" scoped>
.app-input-file {
    display: flex;
    flex-direction: column;
    gap: 3px;
    width: 100%;
    .label {
        font-size: 16px;
    }
    &__image-container {
        position: relative;
        width: 100%;
        height: 100%;
        min-height: 70px;
        border-radius: 10px;
        overflow: hidden;
        background-color: transparent;
        border: 2px dashed $secondary;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.3s;

        &.active {
            background-color: $secondary;
            color: $primary-text;
        }
    }
    &__image-placeholder {
        inset: 0;
        position: absolute;

        @include flex-center;
        flex-direction: column;
        svg {
            width: 20px;
            height: 20px;
            color: #f2f3f4;
        }
    }
    &__input {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: pointer;
    }
}
</style>
