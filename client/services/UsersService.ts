/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_update_user_me_image_users_me_image_put } from '../models/Body_update_user_me_image_users_me_image_put';
import type { ImageInfo } from '../models/ImageInfo';
import type { UserLike } from '../models/UserLike';
import type { UserRead } from '../models/UserRead';
import type { UserReadInstitution } from '../models/UserReadInstitution';
import type { UserReadShort } from '../models/UserReadShort';
import type { UserReadWithEmail } from '../models/UserReadWithEmail';
import type { UserUpdate } from '../models/UserUpdate';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UsersService {
    /**
     * Users:Current User
     * @returns UserReadInstitution Successful Response
     * @throws ApiError
     */
    public static usersCurrentUserUsersMeGet(): CancelablePromise<UserReadInstitution> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/me',
        });
    }
    /**
     * Update User Me
     * @param requestBody
     * @returns UserRead Successful Response
     * @throws ApiError
     */
    public static updateUserMeUsersMePut(
        requestBody: UserUpdate,
    ): CancelablePromise<UserRead> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/me',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update User Me Image
     * @param formData
     * @returns ImageInfo Successful Response
     * @throws ApiError
     */
    public static updateUserMeImageUsersMeImagePut(
        formData: Body_update_user_me_image_users_me_image_put,
    ): CancelablePromise<ImageInfo> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/me/image',
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete User Me Image
     * @returns void
     * @throws ApiError
     */
    public static deleteUserMeImageUsersMeImageDelete(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/me/image',
        });
    }
    /**
     * Update User
     * @param userId
     * @param requestBody
     * @returns UserReadWithEmail Successful Response
     * @throws ApiError
     */
    public static updateUserUsersUserIdPut(
        userId: string,
        requestBody: UserUpdate,
    ): CancelablePromise<UserReadWithEmail> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User
     * @param userId
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserUsersUserIdGet(
        userId: string,
    ): CancelablePromise<(UserReadWithEmail | UserRead)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete User
     * @param userId
     * @returns void
     * @throws ApiError
     */
    public static deleteUserUsersUserIdDelete(
        userId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/users/{user_id}',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Recommended
     * @param hobbiesIds
     * @param institutionsIds
     * @returns UserReadShort Successful Response
     * @throws ApiError
     */
    public static getRecommendedUsersRecommendedGet(
        hobbiesIds?: Array<string>,
        institutionsIds?: Array<string>,
    ): CancelablePromise<UserReadShort> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/recommended',
            query: {
                'hobbies_ids': hobbiesIds,
                'institutions_ids': institutionsIds,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Like User
     * @param userId
     * @returns UserLike Successful Response
     * @throws ApiError
     */
    public static likeUserUsersUserIdLikePost(
        userId: string,
    ): CancelablePromise<UserLike> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user_id}/like',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Dislike User
     * @param userId
     * @returns UserLike Successful Response
     * @throws ApiError
     */
    public static dislikeUserUsersUserIdDislikePost(
        userId: string,
    ): CancelablePromise<UserLike> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/users/{user_id}/dislike',
            path: {
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Users
     * @param search
     * @param page
     * @param orderBy
     * @param order
     * @param superusersToTop
     * @param onlySuperusers
     * @param isVerified
     * @returns UserReadWithEmail Successful Response
     * @throws ApiError
     */
    public static getUsersUsersGet(
        search?: string,
        page: number = 1,
        orderBy: 'name' | 'register_date' = 'name',
        order: 'asc' | 'desc' = 'asc',
        superusersToTop: boolean = false,
        onlySuperusers: boolean = false,
        isVerified?: boolean,
    ): CancelablePromise<Array<UserReadWithEmail>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users',
            query: {
                'search': search,
                'page': page,
                'order_by': orderBy,
                'order': order,
                'superusers_to_top': superusersToTop,
                'only_superusers': onlySuperusers,
                'is_verified': isVerified,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
