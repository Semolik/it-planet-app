/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Body_create_verification_request_verification_post } from '../models/Body_create_verification_request_verification_post';
import type { VerificationRequest } from '../models/VerificationRequest';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class VerificationService {
    /**
     * Get Verification Requests
     * @param page
     * @returns VerificationRequest Successful Response
     * @throws ApiError
     */
    public static getVerificationRequestsVerificationGet(
        page: number = 1,
    ): CancelablePromise<Array<VerificationRequest>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/verification',
            query: {
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Verification Request
     * @param name
     * @param birthdate
     * @param institutionId
     * @param formData
     * @returns VerificationRequest Successful Response
     * @throws ApiError
     */
    public static createVerificationRequestVerificationPost(
        name: string,
        birthdate: string,
        institutionId: string,
        formData: Body_create_verification_request_verification_post,
    ): CancelablePromise<VerificationRequest> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/verification',
            query: {
                'name': name,
                'birthdate': birthdate,
                'institution_id': institutionId,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get User Verification Request
     * @returns any Successful Response
     * @throws ApiError
     */
    public static getUserVerificationRequestVerificationMeGet(): CancelablePromise<(VerificationRequest | null)> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/verification/me',
        });
    }
    /**
     * Get Verification Request
     * @param verificationRequestId
     * @returns VerificationRequest Successful Response
     * @throws ApiError
     */
    public static getVerificationRequestVerificationVerificationRequestIdGet(
        verificationRequestId: string,
    ): CancelablePromise<VerificationRequest> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/verification/{verification_request_id}',
            path: {
                'verification_request_id': verificationRequestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Verification Request
     * @param verificationRequestId
     * @returns void
     * @throws ApiError
     */
    public static deleteVerificationRequestVerificationVerificationRequestIdDelete(
        verificationRequestId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/verification/{verification_request_id}',
            path: {
                'verification_request_id': verificationRequestId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update Verification Request
     * @param verificationRequestId
     * @param approved
     * @returns VerificationRequest Successful Response
     * @throws ApiError
     */
    public static updateVerificationRequestVerificationVerificationRequestIdPut(
        verificationRequestId: string,
        approved: boolean,
    ): CancelablePromise<VerificationRequest> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/verification/{verification_request_id}',
            path: {
                'verification_request_id': verificationRequestId,
            },
            query: {
                'approved': approved,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
