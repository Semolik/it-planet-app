<template>
    <auth-input class="input" @click="showSelector"></auth-input>

    <div class="modal-background" v-show="isVisible" @click="chooseOption"></div>
    <div class="selector" v-show="isVisible">
        <div class="option" @click="chooseOption" v-for="option in options">
            {{ option }}
        </div>
    </div>
</template>

<script setup>
const isVisible = ref(false);
const options = ref(["option1", "option2", "option3"]);

const showSelector = () => {
    isVisible.value = true;
};

const chooseOption = () => {
    isVisible.value = false;
};
</script>

<style scoped lang="scss">
.input {
    z-index: 2;
}

.modal-background {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    background-color: orangered;
    opacity: 0.3;
}

.selector {
    width: 90%;
    background-color: #f2f3f4;
    color: #5f5f5f; 
    position: absolute;
    z-index: 2;
}
</style>
