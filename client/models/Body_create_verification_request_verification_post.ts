/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateVerificationRequest } from './CreateVerificationRequest';
export type Body_create_verification_request_verification_post = {
    request: CreateVerificationRequest;
    /**
     * Реальное фото пользователя
     */
    real_photo: Blob;
    /**
     * Фото документа пользователя
     */
    id_photo: Blob;
};

