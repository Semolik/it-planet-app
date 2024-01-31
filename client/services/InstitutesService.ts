/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInstitute } from '../models/CreateInstitute';
import type { Institute } from '../models/Institute';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InstitutesService {
    /**
     * Create Institute
     * @param requestBody
     * @returns Institute Successful Response
     * @throws ApiError
     */
    public static createInstituteLocationsInstitutesPost(
        requestBody: CreateInstitute,
    ): CancelablePromise<Institute> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/locations/institutes',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Institutes
     * @param cityId
     * @param query
     * @param page
     * @returns Institute Successful Response
     * @throws ApiError
     */
    public static getInstitutesLocationsInstitutesGet(
        cityId: string,
        query?: string,
        page: number = 1,
    ): CancelablePromise<Array<Institute>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/institutes',
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
     * Get Institute
     * @param instituteId
     * @returns Institute Successful Response
     * @throws ApiError
     */
    public static getInstituteLocationsInstitutesInstituteIdGet(
        instituteId: string,
    ): CancelablePromise<Institute> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/institutes/{institute_id}',
            path: {
                'institute_id': instituteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Institute
     * @param instituteId
     * @param requestBody
     * @returns Institute Successful Response
     * @throws ApiError
     */
    public static updateInstituteLocationsInstitutesInstituteIdPut(
        instituteId: string,
        requestBody: CreateInstitute,
    ): CancelablePromise<Institute> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/locations/institutes/{institute_id}',
            path: {
                'institute_id': instituteId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Institute
     * @param instituteId
     * @returns void
     * @throws ApiError
     */
    public static deleteInstituteLocationsInstitutesInstituteIdDelete(
        instituteId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/locations/institutes/{institute_id}',
            path: {
                'institute_id': instituteId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
