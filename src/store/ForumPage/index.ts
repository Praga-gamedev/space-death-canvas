import { kea } from 'kea';

import { Notification } from 'src/utils/notification';

import {
    getTopicList,
    getTopicById,
    createTopic,
    deleteTopic,
    getCommentList,
    createComment,
    deleteComment,
    getCommentById,
} from '@api/forum';

import { TState, ICommentData, ITopicData } from '../types';

export const logic = kea({
    path: () => ['scenes', 'forumPage'],

    actions: () => ({
        startLoading: () => undefined,
        setLoading: (loading: boolean) => loading,

        setTopics: (payload: ITopicData[]) => payload,
        setComments: (payload: ICommentData[]) => payload,

        setActualTopic: (payload: ICommentData | ITopicData) => payload,
    }),

    reducers: ({ actions }) => ({
        isLoading: [
            null,
            {
                [actions.setLoading]: (_: TState, payload: boolean) => payload,
                [actions.startLoading]: () => true,
            },
        ],
        topics: [
            [],
            {
                [actions.setTopics]: (_: TState, payload: ITopicData[]) =>
                    payload,
            },
        ],
        comments: [
            [],
            {
                [actions.setComments]: (_: TState, payload: ICommentData[]) =>
                    payload,
            },
        ],
        actualTopic: [
            {},
            {
                [actions.setActualTopic]: (
                    _: TState,
                    payload: ICommentData | ITopicData
                ) => payload,
            },
        ],
    }),

    thunks: ({ actions }: Record<string, any>) => ({
        getTopics: async () => {
            try {
                actions.startLoading();

                const res = await getTopicList();

                actions.setTopics(res.data);
            } catch (error) {
                console.error('get forum', error);
            } finally {
                actions.setLoading(false);
            }
        },
        postCreateTopic: async (name: string) => {
            try {
                actions.startLoading();

                await createTopic(name);

                actions.getTopics();

                Notification({
                    type: 'success',
                    title: 'Форум',
                    message: `Тема "${name}" успешно создана`,
                });
            } catch (error) {
                console.error('post forum topic', error);
            } finally {
                actions.setLoading(false);
            }
        },
        postDeleteTopic: async (id: number) => {
            try {
                actions.startLoading();

                await deleteTopic(id);

                actions.getTopics();

                Notification({
                    title: 'Форум',
                    message: `Ваша тема удалена`,
                });
            } catch (error) {
                console.error('delete forum topic', error);
            } finally {
                actions.setLoading(false);
            }
        },
        getComments: async (
            topicId: number,
            commentId: number | null = null
        ) => {
            try {
                actions.startLoading();

                const res = await getCommentList(topicId, commentId);

                actions.setComments(res.data);
            } catch (error) {
                console.error('get comment', error);
            } finally {
                actions.setLoading(false);
            }
        },
        postCreateComment: async (
            name: string,
            topicId: number,
            commentId: number | null = null
        ) => {
            try {
                actions.startLoading();

                await createComment(name, topicId, commentId);

                actions.getComments(topicId, commentId);
            } catch (error) {
                console.error('post forum comment', error);
            } finally {
                actions.setLoading(false);
            }
        },
        postDeleteComment: async (
            topicId: number,
            parentId: number | null,
            commentId: number
        ) => {
            try {
                actions.startLoading();

                await deleteComment(topicId, commentId);

                actions.getComments(topicId, parentId);
            } catch (error) {
                console.error('delete forum comment', error);
            } finally {
                actions.setLoading(false);
            }
        },
        chooseActualDialog: async (
            topicId: number,
            commentId: number | null = null
        ) => {
            let topic;

            if (commentId) {
                topic = await getCommentById(topicId, commentId);
            } else {
                topic = await getTopicById(topicId);
            }

            actions.setActualTopic(topic.data);
        },
    }),
});
