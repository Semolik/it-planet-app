/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { UserReadShort } from './UserReadShort';
export type Message = {
    id: string;
    chat_id: string;
    from_user: UserReadShort;
    content: string;
    creation_date: string;
    read: boolean;
    updated: boolean;
};

