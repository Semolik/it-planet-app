<template>
    <auth-input :class="['input', { active: isVisible }]" @click="showSelector"></auth-input>
    <div class="modal-background" v-show="isVisible" @click="chooseOption"></div>
    <div class="selector" v-show="isVisible">
        <div class="option" @click="chooseOption(city, $event)" v-for="city in cities">
            {{ city }}
        </div>
    </div>
    <div class="selector" v-show="isVisible">
        <div class="option" @click="chooseOption(university, $event)" v-for="university in universities">
            {{ university }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps(["cities", "universities"]);
const emit = defineEmits(["choice"]);

const isVisible = ref(false);

const showSelector = () => {
    isVisible.value = true;
};

const choice = ref('');
const chooseOption = (object, event) => {
    choice.value = object;
    isVisible.value = false;
};
</script>

<style scoped lang="scss">
.input.active {
    z-index: 2;
    position: relative;
}

.modal-background {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
}

.selector {
    width: 90%;
    background-color: #f2f3f4;
    color: #5f5f5f;
    position: absolute;
    z-index: 2;
}
</style>
