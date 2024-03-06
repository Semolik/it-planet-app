/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hobby } from './Hobby';
export type UserReadWithEmail = {
    email: string;
    image?: (string | null);
    age: number;
    register_date: string;
    hobbies: Array<Hobby>;
    name: string;
    description?: string;
    birthdate: string;
    verified: boolean;
    id: string;
    is_active?: boolean;
    is_superuser?: boolean;
    is_verified?: boolean;
};

