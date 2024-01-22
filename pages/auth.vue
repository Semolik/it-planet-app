<template>
    <div class="wrapper">
        <div class="title">Frienda</div>
        <div class="auth-frame">
            <div class="auth-frame_title">Sign In</div>
            <auth-input class="auth-frame_input" v-model="login" placeholder="login" />
            <auth-input class="auth-frame_input" v-model="password" @update:modelValue="toggleActive" type="password" placeholder="password" />
            <white-button v-if="isActive" class="auth-frame_submit-btn">Submit</white-button>
            <white-button v-else class="auth-frame_submit-btn_off">Submit</white-button>
        </div>
        <div class="reg-offer">
            <div class="reg-offer_title">Have no account?</div>
            <white-button class="reg-offer_signup-btn">Sign Up</white-button>
        </div>
    </div>
</template>

<script setup>
const login = ref('')
const password = ref('')
const isActive = ref(false)

const toggleActive = () => {
    if (password.value.length >= 8) {
        isActive.value = true
    } else {
        isActive.value = false
    }
}
</script>

<style scoped lang="scss">
.wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 5vw;
    background-color: #62A87C;
}

.title {
    font-family: 'Dancing Script', sans-serif;
    color: #f2f3f4;
    font-size: 115px;
}

.auth-frame {
    width: 100%;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    gap: 7px;

    &_title {
        font-size: 30px;
        color: #f2f3f4;
    }

    &_input {
        width: 100%;
        box-shadow: 0 0 3px #5f5f5f;
    }

    &_submit-btn {
        width: 100%;
        height: 46px;
        font-size: 24px;
        box-shadow: 0 0 3px #5f5f5f;

        &_off {
            width: 100%;
            height: 46px;
            font-size: 24px;
            background-color: #5f5f5f;
            color: #f2f3f4;

            &:active {
                background-color: #5f5f5f;
                color: #f2f3f4;
            }
        }
    }
}

.reg-offer {
    color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    &_title {
        margin-bottom: 5px;
        color: #f2f3f4;
    }

    &_signup-btn {
        height: 30px;
        box-shadow: 0 0 3px #5f5f5f;
    }
}
</style>