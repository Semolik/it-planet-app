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
     * @param query Поиск по имени пользователя
     * @returns ChatWithUsers Successful Response
     * @throws ApiError
     */
    public static getChatsChatsGet(
        page: number,
        query?: string,
    ): CancelablePromise<Array<ChatWithUsers>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chats',
            query: {
                'query': query,
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
     * Delete Chat
     * Удаляет чат.
     * @param chatId ID чата
     * @returns void
     * @throws ApiError
     */
    public static deleteChatChatsChatIdDelete(
        chatId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
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
     * Get Chat
     * Возвращает чат по его ID.
     * @param chatId ID чата
     * @param read Отметить сообщения как прочитанные
     * @returns ChatWithUsers Successful Response
     * @throws ApiError
     */
    public static getChatChatsChatIdGet(
        chatId: string,
        read: boolean = true,
    ): CancelablePromise<ChatWithUsers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chats/{chat_id}',
            path: {
                'chat_id': chatId,
            },
            query: {
                'read': read,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
    /**
     * Get Chat With User
     * Возвращает чат с пользователем.
     * @param userId ID пользователя
     * @returns ChatWithUsers Successful Response
     * @throws ApiError
     */
    public static getChatWithUserChatsUserUserIdGet(
        userId: string,
    ): CancelablePromise<ChatWithUsers> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/chats/user/{user_id}',
            path: {
                'user_id': userId,
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
     * Read Messages
     * Отмечает сообщения в чате как прочитанные.
     * @param chatId ID чата
     * @returns void
     * @throws ApiError
     */
    public static readMessagesChatsChatIdMessagesReadPost(
        chatId: string,
    ): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/chats/{chat_id}/messages/read',
            path: {
                'chat_id': chatId,
            },
            errors: {
                422: `Validation Error`,
            },
        });
    }
}
