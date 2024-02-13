/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Notification } from '../models/Notification';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NotificationsService {
    /**
     * Get Notifications
     * @returns Notification Successful Response
     * @throws ApiError
     */
    public static getNotificationsNotificationsGet(): CancelablePromise<Array<Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications',
        });
    }
    /**
     * Get Unread Notifications
     * @returns Notification Successful Response
     * @throws ApiError
     */
    public static getUnreadNotificationsNotificationsUnreadGet(): CancelablePromise<Array<Notification>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/unread',
        });
    }
    /**
     * Get Unread Notifications Count
     * @returns number Successful Response
     * @throws ApiError
     */
    public static getUnreadNotificationsCountNotificationsUnreadCountGet(): CancelablePromise<number> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/unread/count',
        });
    }
    /**
     * Read Notification
     * @param notificationId ID уведомления
     * @returns void
     * @throws ApiError
     */
    public static readNotificationNotificationsNotificationIdReadPost(
        notificationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notifications/{notification_id}/read',
            path: {
                'notification_id': notificationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Notification
     * @param notificationId ID уведомления
     * @returns Notification Successful Response
     * @throws ApiError
     */
    public static getNotificationNotificationsNotificationIdGet(
        notificationId: string,
    ): CancelablePromise<Notification> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notifications/{notification_id}',
            path: {
                'notification_id': notificationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete Notification
     * @param notificationId ID уведомления
     * @returns void
     * @throws ApiError
     */
    public static deleteNotificationNotificationsNotificationIdDelete(
        notificationId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/notifications/{notification_id}',
            path: {
                'notification_id': notificationId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
