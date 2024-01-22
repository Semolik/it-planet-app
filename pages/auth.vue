<template>
    <div class="wrapper">
        <div class="title">Frienda</div>
        <div class="auth-frame">
            <div class="auth-frame_title">Sign In</div>
            <auth-input class="auth-frame_input" v-model="login" placeholder="login" />
            <auth-input class="auth-frame_input" v-model="password" placeholder="password" />
            <green-button class="auth-frame_submit-btn">Submit</green-button>
        </div>
        <div class="reg-offer">
            <div class="reg-offer_title">Have no account?</div>
            <white-button class="reg-offer_signup-btn">Sign Up</white-button>
        </div>
    </div>
</template>

<script setup>
const login = ref('')
const password= ref('')
</script>

<style scoped lang="scss">
.wrapper {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 0 5vw;
}

.title {
    font-family: 'Dancing Script', sans-serif;
    color: #62A87C;
    font-size: 115px;
}

.auth-frame {
    width: 100%;
    // box-shadow: 0 0 10px #62A87C;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
    gap: 7px;

    &_title {
        font-size: 30px;
        color: #62A87C;
    }

    &_input {
        width: 100%;
    }

    &_submit-btn {
        width: 100%;
        height: 40px;
        font-size: 24px;
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
        color: #3f3f3f;
    }

    &_signup-btn {
        height: 30px;
        color: #3f3f3f;
    }
}
</style>