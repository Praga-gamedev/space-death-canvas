import YandexApi from 'src/utils/api/YandexApi';

import { ILeaderboardData, ILeaderboardLeaderData } from './types';

const key = 'sdcScore';

export const leaderboardData = ({
    cursor = 0,
    limit = 10,
}: ILeaderboardData) => {
    return YandexApi.post({
        url: '/leaderboard/all',
        data: { ratingFieldName: key, cursor, limit },
    });
};

export const leaderboardAddNewLeader = (data: ILeaderboardLeaderData) => {
    return YandexApi.post({
        url: '/leaderboard',
        data: { data, ratingFieldName: key },
    });
};
