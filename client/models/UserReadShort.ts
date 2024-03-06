/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Hobby } from './Hobby';
export type UserReadShort = {
    name: string;
    description?: string;
    image?: (string | null);
    age: number;
    register_date: string;
    hobbies: Array<Hobby>;
    id: string;
};

