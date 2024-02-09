/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Institution } from './Institution';
import type { UserRead } from './UserRead';
export type VerificationRequest = {
    id: string;
    creation_date: string;
    user_id: string;
    user: UserRead;
    updated_date: (string | null);
    reviewed: boolean;
    institution: Institution;
    real_photo: string;
    id_photo: string;
};

