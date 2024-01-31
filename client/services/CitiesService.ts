/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { City } from '../models/City';
import type { CreateCity } from '../models/CreateCity';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CitiesService {
    /**
     * Get Cities
     * @returns City Successful Response
     * @throws ApiError
     */
    public static getCitiesLocationsCitiesGet(): CancelablePromise<Array<City>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/cities',
        });
    }
    /**
     * Create City
     * @param requestBody
     * @returns City Successful Response
     * @throws ApiError
     */
    public static createCityLocationsCitiesPost(
        requestBody: CreateCity,
    ): CancelablePromise<City> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/locations/cities',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get City
     * @param cityId
     * @returns City Successful Response
     * @throws ApiError
     */
    public static getCityLocationsCitiesCityIdGet(
        cityId: string,
    ): CancelablePromise<City> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locations/cities/{city_id}',
            path: {
                'city_id': cityId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Update City
     * @param cityId
     * @param requestBody
     * @returns City Successful Response
     * @throws ApiError
     */
    public static updateCityLocationsCitiesCityIdPut(
        cityId: string,
        requestBody: CreateCity,
    ): CancelablePromise<City> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/locations/cities/{city_id}',
            path: {
                'city_id': cityId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Delete City
     * @param cityId
     * @returns void
     * @throws ApiError
     */
    public static deleteCityLocationsCitiesCityIdDelete(
        cityId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/locations/cities/{city_id}',
            path: {
                'city_id': cityId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
