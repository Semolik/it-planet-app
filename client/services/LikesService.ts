/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserLikeFull } from '../models/UserLikeFull';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class LikesService {
    /**
     * Get Matches
     * Возвращает список пользователей, которые взаимно лайкнули текущего пользователя.
     * @param page
     * @returns UserLikeFull Successful Response
     * @throws ApiError
     */
    public static getMatchesLikesMatchesGet(
        page: number = 1,
    ): CancelablePromise<Array<UserLikeFull>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/likes/matches',
            query: {
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Likes
     * Возвращает список пользователей, которых вы лайкнули.
     * @param page
     * @returns UserLikeFull Successful Response
     * @throws ApiError
     */
    public static getLikesLikesGet(
        page: number = 1,
    ): CancelablePromise<Array<UserLikeFull>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/likes',
            query: {
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
