/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class MessagesService {
    /**
     * Read Message
     * Отмечает сообщение как прочитанное.
     * @param massageId ID сообщения
     * @returns void
     * @throws ApiError
     */
    public static readMessageMessagesMassageIdReadPost(
        massageId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/messages/{massage_id}/read',
            path: {
                'massage_id': massageId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
