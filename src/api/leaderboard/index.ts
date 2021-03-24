import Api from 'src/utils/Api';

import { ILeaderboardData, ILeaderboardLeaderData } from './types';

const key = 'sdcScore';

export const leaderboardData = async ({
    cursor = 0,
    limit = 10,
}: ILeaderboardData) => {
    return Api.post({
        url: '/leaderboard/all',
        data: { ratingFieldName: key, cursor, limit },
    });
};

export const leaderboardAddNewLeader = async (data: ILeaderboardLeaderData) => {
    return Api.post({
        url: '/leaderboard',
        data: { data, ratingFieldName: key },
    });
};
