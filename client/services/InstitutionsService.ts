/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateInstitution } from '../models/CreateInstitution';
import type { Institution } from '../models/Institution';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class InstitutionsService {
    /**
     * Create Institution
     * @param requestBody
     * @returns Institution Successful Response
     * @throws ApiError
     */
    public static createInstitutionLocationsInstitutionsPost(
        requestBody: CreateInstitution,
    ): CancelablePromise<Institution> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/locations/institutions',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Institutions
     * @param cityId
     * @param query
     * @param page
     * @returns Institution Successful Response
     * @throws ApiError
     */
    public static getInstitutionsLocationsInstitutionsGet(
        cityId: string,
        query?: string,
        page: number = 1,
    ): CancelablePromise<Array<Institution>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/institutions',
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
     * Get Institution
     * @param institutionId
     * @returns Institution Successful Response
     * @throws ApiError
     */
    public static getInstitutionLocationsInstitutionsInstitutionIdGet(
        institutionId: string,
    ): CancelablePromise<Institution> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/institutions/{institution_id}',
            path: {
                'institution_id': institutionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Institution
     * @param institutionId
     * @param requestBody
     * @returns Institution Successful Response
     * @throws ApiError
     */
    public static updateInstitutionLocationsInstitutionsInstitutionIdPut(
        institutionId: string,
        requestBody: CreateInstitution,
    ): CancelablePromise<Institution> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/locations/institutions/{institution_id}',
            path: {
                'institution_id': institutionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Institution
     * @param institutionId
     * @returns void
     * @throws ApiError
     */
    public static deleteInstitutionLocationsInstitutionsInstitutionIdDelete(
        institutionId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/locations/institutions/{institution_id}',
            path: {
                'institution_id': institutionId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
