/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateUniversity } from '../models/CreateUniversity';
import type { University } from '../models/University';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UniversitiesService {
    /**
     * Create University
     * @param requestBody
     * @returns University Successful Response
     * @throws ApiError
     */
    public static createUniversityLocationsUniversitiesPost(
        requestBody: CreateUniversity,
    ): CancelablePromise<University> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/locations/universities',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Universities
     * @param cityId
     * @param query
     * @param page
     * @returns University Successful Response
     * @throws ApiError
     */
    public static getUniversitiesLocationsUniversitiesGet(
        cityId: string,
        query?: string,
        page: number = 1,
    ): CancelablePromise<Array<University>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/universities',
            query: {
                'city_id': cityId,
                'query': query,
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get University
     * @param universityId
     * @returns University Successful Response
     * @throws ApiError
     */
    public static getUniversityLocationsUniversitiesUniversityIdGet(
        universityId: string,
    ): CancelablePromise<University> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/universities/{university_id}',
            path: {
                'university_id': universityId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update University
     * @param universityId
     * @param requestBody
     * @returns University Successful Response
     * @throws ApiError
     */
    public static updateUniversityLocationsUniversitiesUniversityIdPut(
        universityId: string,
        requestBody: CreateUniversity,
    ): CancelablePromise<University> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/locations/universities/{university_id}',
            path: {
                'university_id': universityId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete University
     * @param universityId
     * @returns void
     * @throws ApiError
     */
    public static deleteUniversityLocationsUniversitiesUniversityIdDelete(
        universityId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/locations/universities/{university_id}',
            path: {
                'university_id': universityId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
