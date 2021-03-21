import Api from 'src/utils/Api';

import { ILeaderboardData } from './types';

export const leaderboardData = async ({
    cursor = 0,
    limit = 10,
    ratingFieldName = 'sdcScore',
}: ILeaderboardData) => {
    return Api.post({
        url: '/leaderboard/all',
        data: { ratingFieldName, cursor, limit },
    });
};

export const leaderboardNewLeader = async (
    ratingFieldName = 'sdcScore',
    data: Record<string, any>
) => {
    return Api.post({
        url: '/leaderboard',
        data: { data, ratingFieldName },
    });
};
