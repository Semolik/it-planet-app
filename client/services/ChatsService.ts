/* generated using openapi-typescript-codegen -- do no edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Chat } from '../models/Chat';
import type { ChatWithUsers } from '../models/ChatWithUsers';
import type { Message } from '../models/Message';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class ChatsService {
    /**
     * Get Chats
     * Возвращает список чатов пользователя.
     * @param page
     * @returns ChatWithUsers Successful Response
     * @throws ApiError
     */
    public static getChatsChatsGet(
        page: number,
    ): CancelablePromise<Array<ChatWithUsers>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chats',
            query: {
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Create Chat
     * Создает чат с пользователем.
     * @param message
     * @param userId ID пользователя, с которым создается чат
     * @returns Chat Successful Response
     * @throws ApiError
     */
    public static createChatChatsPost(
        message: string,
        userId: string,
    ): CancelablePromise<Chat> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chats',
            query: {
                'message': message,
                'user_id': userId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Chat
     * Возвращает чат по его ID.
     * @param chatId ID чата
     * @returns ChatWithUsers Successful Response
     * @throws ApiError
     */
    public static getChatChatsChatIdGet(
        chatId: string,
    ): CancelablePromise<ChatWithUsers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chats/{chat_id}',
            path: {
                'chat_id': chatId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Send Message
     * Отправляет сообщение в чат.
     * @param chatId ID чата
     * @param content
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static sendMessageChatsChatIdMessagesPost(
        chatId: string,
        content: string,
    ): CancelablePromise<Message> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chats/{chat_id}/messages',
            path: {
                'chat_id': chatId,
            },
            query: {
                'content': content,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Messages
     * Возвращает список сообщений в чате.
     * @param chatId ID чата
     * @param page
     * @returns Message Successful Response
     * @throws ApiError
     */
    public static getMessagesChatsChatIdMessagesGet(
        chatId: string,
        page: number,
    ): CancelablePromise<Array<Message>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chats/{chat_id}/messages',
            path: {
                'chat_id': chatId,
            },
            query: {
                'page': page,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Push To Connected Websockets
     * @param requestBody
     * @returns any Successful Response
     * @throws ApiError
     */
    public static pushToConnectedWebsocketsChatsPushPost(
        requestBody: Record<string, any>,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chats/push',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
