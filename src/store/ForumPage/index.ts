import { kea } from 'kea';

import { createTopic, getTopicList, deleteTopic } from '@api/forum';
import { ILeaderboardLeaderData } from '@api/leaderboard/types';

import { TState } from '../types';

export const logic = kea({
    path: () => ['scenes', 'forumPage'],

    actions: () => ({
        startLoading: () => undefined,
        setLoading: (loading: boolean) => loading,

        setTopics: (payload: any) => payload,
        setActualComments: (payload: any) => payload,
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
                /* Поставить тип */
                [actions.setTopics]: (_: TState, payload: any) => payload,
            },
        ],
    }),

    thunks: ({ actions }: any) => ({
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
            } catch (error) {
                console.error('delete forum topic', error);
            } finally {
                actions.setLoading(false);
            }
        },
    }),
});
