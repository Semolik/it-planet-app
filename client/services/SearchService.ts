/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Institute } from '../models/Institute';
import type { University } from '../models/University';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SearchService {
    /**
     * Search
     * @param cityId
     * @param query
     * @returns any Successful Response
     * @throws ApiError
     */
    public static searchLocationsSearchGet(
        cityId: string,
        query: string,
    ): CancelablePromise<Array<(Institute | University)>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/search',
            query: {
                'city_id': cityId,
                'query': query,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
