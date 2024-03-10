import { defineStore } from "pinia";
import { AuthService, UsersService } from "@/client";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        logined: false,
        userData: null,
    }),
    getters: {
        isSuperuser() {
            return this.userData?.is_superuser;
        },
    },
    actions: {
        resetSavedData() {
            this.logined = false;
            this.userData = null;
        },
        async logout() {
            try {
                await AuthService.authJwtLogoutAuthJwtLogoutPost();
            } catch (error) {}
            this.resetSavedData();
        },
        async login(email, password) {
            this.logined = false;
            try {
                this.userData = await AuthService.authJwtLoginAuthJwtLoginPost({
                    username: email,
                    password: password,
                });

                this.logined = true;
            } catch (error) {
                this.resetSavedData();
                return error;
            }
        },
        async getUserData() {
            try {
                this.userData = await UsersService.usersCurrentUserUsersMeGet();
                this.logined = true;
            } catch (error) {
                console.log(error);
                this.resetSavedData();
            }
        },
        async updateProfile(data) {
            try {
                this.userData = await UsersService.updateUserMeUsersMePut({
                    ...this.userData,
                    ...data,
                });
            } catch (error) {
                return error;
            }
        },
        async registerRequest(email, password, name, birthdate) {
            this.logined = false;
            try {
                this.userData =
                    await AuthService.registerRegisterAuthRegisterPost({
                        email,
                        password,
                        name,
                        birthdate,
                        verified: true,
                    });
                this.logined = true;
            } catch (error) {
                this.resetSavedData();
                return error;
            }
        },
    },
});
