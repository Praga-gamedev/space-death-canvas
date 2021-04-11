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
} from '@api/forum';

import { TState } from '../types';

export const logic = kea({
    path: () => ['scenes', 'forumPage'],

    actions: () => ({
        startLoading: () => undefined,
        setLoading: (loading: boolean) => loading,

        setTopics: (payload: any) => payload,
        setComments: (payload: any) => payload,

        setActualTopic: (payload: any) => payload,
        setActualComment: (payload: any) => payload,
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
                /* TODO:Поставить тип */
                [actions.setTopics]: (_: TState, payload: any) => payload,
            },
        ],
        comments: [
            [],
            {
                /* TODO:Поставить тип */
                [actions.setComments]: (_: TState, payload: any) => payload,
            },
        ],
        actualTopic: [
            {},
            {
                [actions.setActualTopic]: (_: TState, payload: any) => payload,
            },
        ],
        actualComment: [
            {},
            {
                [actions.setActualComment]: (_: TState, payload: any) =>
                    payload,
            },
        ],
    }),

    thunks: ({
        actions,
        getState,
    }: {
        actions: any;
        getState: () => TState;
    }) => ({
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
        getComments: async (topicId: number) => {
            try {
                actions.startLoading();

                const res = await getCommentList(topicId);

                actions.setComments(res.data);
            } catch (error) {
                console.error('get comment', error);
            } finally {
                actions.setLoading(false);
            }
        },
        postCreateComment: async (name: string, topicId: number) => {
            try {
                actions.startLoading();

                await createComment(name, topicId);

                actions.getComments(topicId);
            } catch (error) {
                console.error('post forum comment', error);
            } finally {
                actions.setLoading(false);
            }
        },
        postDeleteComment: async (topicId: number, commentId: number) => {
            try {
                actions.startLoading();

                await deleteComment(topicId, commentId);

                actions.getComments(topicId);
            } catch (error) {
                console.error('delete forum comment', error);
            } finally {
                actions.setLoading(false);
            }
        },
        chooseActualDialog: async (topicId: number) => {
            // TODO: пока не работает
            // const topic = await getTopicById(topicId);

            /* Поэтому: */

            const topics = await getTopicList();

            const actualTopic = topics.data.find(
                (item: any) => item.id === topicId
            );

            /**/

            actions.setActualTopic(actualTopic);
        },
    }),
});
