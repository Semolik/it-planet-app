<template>
  <div class="app-input-image">
    <div class="app-input-image__image-container">
      <img
        v-if="image"
        :src="image"
        class="app-input-image__image"
        alt="Иконка приложения"
      />
      <div class="app-input-image__image-placeholder">
        <Icon :name="icon" v-if="!image" />
        <slot />
      </div>
      <input
        ref="inputRef"
        type="file"
        accept="image/*"
        @change="onFileChange"
        class="app-input-image__input"
        v-if="!imageOnly"
        :multiple="multiple"
      />
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  image: {
    type: String,
    default: null,
  },
  icon: {
    type: String,
    default: "material-symbols:image",
  },
  imageOnly: {
    type: Boolean,
    default: false,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
});
const { image } = toRefs(props);
const emit = defineEmits(["change"]);
const { $toast } = useNuxtApp();
const onFileChange = (e) => {
  const files = e.target.files;
  if (!files.length) return;
  const blob = [];
  for (const file of files) {
    if (!file.type.startsWith("image/") || file.type.indexOf("svg+xml") > -1) {
      $toast.error("Этот тип файла не поддерживается");
      return;
    }
    blob.push(file);
    if (!props.multiple) break;
  }
  emit("change", props.multiple ? blob : blob[0]);
};
</script>
<style lang="scss" scoped>
.app-input-image {
  display: flex;
  flex-direction: column;
  gap: 3px;
  width: 100%;
  @include flex-center;

  &__image-container {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: hidden;
    background-color: transparent;
    border: 2px dashed #f2f3f4;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    aspect-ratio: 1;
    max-width: 200px;
  }
  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &__image-placeholder {
    inset: 0;
    position: absolute;
    @include flex-center;
    svg {
      width: 50px;
      height: 50px;
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
