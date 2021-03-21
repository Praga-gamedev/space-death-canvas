import { kea } from 'kea';

import { leaderboardData } from '@api/leaderboard';

import { TState } from '../types';

export const logic = kea({
    path: () => ['scenes', 'leaderboardPage'],

    actions: () => ({
        startLoading: () => undefined,
        setLoading: (loading: boolean) => loading,

        setError: true,

        setLeaders: (payload: any) => payload,
    }),

    reducers: ({ actions }) => ({
        isLoading: [
            null,
            {
                [actions.setError]: () => false,

                [actions.setLoading]: (_: TState, payload: boolean) => payload,
                [actions.startLoading]: () => true,
            },
        ],
        leaders: [
            null,
            {
                [actions.setLeaders]: (_: TState, payload: any) => payload,
            },
        ],
    }),

    thunks: ({ actions }: { actions: any }) => ({
        getLeaders: async (page: number) => {
            try {
                actions.startLoading();

                const res = await leaderboardData({ cursor: page });

                actions.setLeaders(res);

                actions.setLoading(false);
            } catch (error) {
                actions.setError();

                console.error('get leaderboards', error);
            }
        },
    }),
});
