/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_auth_jwt_login_auth_jwt_login_post } from '../models/Body_auth_jwt_login_auth_jwt_login_post';
import type { Body_reset_forgot_password_auth_forgot_password_post } from '../models/Body_reset_forgot_password_auth_forgot_password_post';
import type { Body_reset_reset_password_auth_reset_password_post } from '../models/Body_reset_reset_password_auth_reset_password_post';
import type { Body_verify_request_token_auth_request_verify_token_post } from '../models/Body_verify_request_token_auth_request_verify_token_post';
import type { Body_verify_verify_auth_verify_post } from '../models/Body_verify_verify_auth_verify_post';
import type { UserCreate } from '../models/UserCreate';
import type { UserRead } from '../models/UserRead';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class AuthService {
    /**
     * Auth:Jwt.Login
     * @param formData
     * @returns any Successful Response
     * @throws ApiError
     */
    public static authJwtLoginAuthJwtLoginPost(
        formData: Body_auth_jwt_login_auth_jwt_login_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/jwt/login',
            formData: formData,
            mediaType: 'application/x-www-form-urlencoded',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Auth:Jwt.Logout
     * @returns any Successful Response
     * @throws ApiError
     */
    public static authJwtLogoutAuthJwtLogoutPost(): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/jwt/logout',
            errors: {
                401: `Missing token or inactive user.`,
            },
        });
    }
    /**
     * Reset:Forgot Password
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static resetForgotPasswordAuthForgotPasswordPost(
        requestBody: Body_reset_forgot_password_auth_forgot_password_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/forgot-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Reset:Reset Password
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static resetResetPasswordAuthResetPasswordPost(
        requestBody: Body_reset_reset_password_auth_reset_password_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/reset-password',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Verify:Request-Token
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static verifyRequestTokenAuthRequestVerifyTokenPost(
        requestBody: Body_verify_request_token_auth_request_verify_token_post,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/request-verify-token',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Verify:Verify
     * @param requestBody
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static verifyVerifyAuthVerifyPost(
        requestBody: Body_verify_verify_auth_verify_post,
    ): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/verify',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
    /**
     * Register:Register
     * @param requestBody
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static registerRegisterAuthRegisterPost(
        requestBody: UserCreate,
    ): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/auth/register',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Bad Request`,
                422: `Validation Error`,
            },
        });
    }
}
