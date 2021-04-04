export interface ILeaderboardData {
    cursor: number;
    limit?: number;
    ratingFieldName?: string;
}

export interface ILeaderboardLeaderData {
    sdcScore: number;
    name: string;
    avatar: string;
    id: number;
}
