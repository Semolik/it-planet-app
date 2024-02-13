/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Message } from './Message';
import type { UserReadShort } from './UserReadShort';
export type ChatWithUsers = {
    id: string;
    user_id_1: string;
    user_id_2: string;
    creation_date: string;
    last_message: Message;
    user_1: UserReadShort;
    user_2: UserReadShort;
};

