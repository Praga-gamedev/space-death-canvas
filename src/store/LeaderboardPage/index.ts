import { kea } from 'kea';

import { leaderboardData, leaderboardAddNewLeader } from '@api/leaderboard';
import { ILeaderboardLeaderData } from '@api/leaderboard/types';

import { TState } from '../types';

export const logic = kea({
    path: () => ['scenes', 'leaderboardPage'],

    actions: () => ({
        startLoading: () => undefined,
        setLoading: (loading: boolean) => loading,

        setLeaders: (payload: any) => payload,
    }),

    reducers: ({ actions }) => ({
        isLoading: [
            null,
            {
                [actions.setLoading]: (_: TState, payload: boolean) => payload,
                [actions.startLoading]: () => true,
            },
        ],
        leaders: [
            [],
            {
                [actions.setLeaders]: (
                    _: TState,
                    payload: Array<ILeaderboardLeaderData>
                ) => payload,
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
        getLeaders: async (page: number) => {
            try {
                actions.startLoading();

                const res = await leaderboardData({ cursor: page });

                actions.setLeaders(res);
            } catch (error) {
                console.error('get leaderboards', error);
            } finally {
                actions.setLoading(false);
            }
        },
        postLeaderScore: async (score: number) => {
            const { id, login, avatar } = getState().scenes.authPage.user;
            
            try {
                await leaderboardAddNewLeader({
                    sdcScore: score,
                    name: login,
                    avatar,
                    id,
                });
            } catch (error) {
                console.error('post leaderboards', error);
            }
        },
    }),
});
