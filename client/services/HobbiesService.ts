/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hobby } from '../models/Hobby';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class HobbiesService {
    /**
     * Create Hobby
     * @param name
     * @returns Hobby Successful Response
     * @throws ApiError
     */
    public static createHobbyHobbiesPost(
        name: string,
    ): CancelablePromise<Hobby> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/hobbies',
            query: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Hobbies
     * Возвращает список хобби, отсортированный по количеству пользователей, занимающихся этим хобби.
     * @param page
     * @param query
     * @returns Hobby Successful Response
     * @throws ApiError
     */
    public static getHobbiesHobbiesGet(
        page: number,
        query?: string,
    ): CancelablePromise<Array<Hobby>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hobbies',
            query: {
                'page': page,
                'query': query,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get My Hobbies
     * Возвращает список хобби, которыми занимается текущий пользователь.
     * @returns Hobby Successful Response
     * @throws ApiError
     */
    public static getMyHobbiesHobbiesMyGet(): CancelablePromise<Array<Hobby>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hobbies/my',
        });
    }
    /**
     * Add My Hobby
     * Добавляет хобби пользователю.
     * @param hobbyId
     * @returns Hobby Successful Response
     * @throws ApiError
     */
    public static addMyHobbyHobbiesMyHobbyIdPost(
        hobbyId: string,
    ): CancelablePromise<Hobby> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/hobbies/my/{hobby_id}',
            path: {
                'hobby_id': hobbyId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete My Hobby
     * Удаляет хобби у пользователя.
     * @param hobbyId
     * @returns void
     * @throws ApiError
     */
    public static deleteMyHobbyHobbiesMyHobbyIdDelete(
        hobbyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/hobbies/my/{hobby_id}',
            path: {
                'hobby_id': hobbyId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Hobby
     * @param hobbyId
     * @param name
     * @returns Hobby Successful Response
     * @throws ApiError
     */
    public static updateHobbyHobbiesHobbyIdPut(
        hobbyId: string,
        name: string,
    ): CancelablePromise<Hobby> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/hobbies/{hobby_id}',
            path: {
                'hobby_id': hobbyId,
            },
            query: {
                'name': name,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Hobby
     * Возвращает хобби по его id.
     * @param hobbyId
     * @returns Hobby Successful Response
     * @throws ApiError
     */
    public static getHobbyHobbiesHobbyIdGet(
        hobbyId: string,
    ): CancelablePromise<Hobby> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/hobbies/{hobby_id}',
            path: {
                'hobby_id': hobbyId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Hobby
     * @param hobbyId
     * @returns void
     * @throws ApiError
     */
    public static deleteHobbyHobbiesHobbyIdDelete(
        hobbyId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/hobbies/{hobby_id}',
            path: {
                'hobby_id': hobbyId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
