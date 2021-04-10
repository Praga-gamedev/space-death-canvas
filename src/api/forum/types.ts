export interface ITopicData {
    id: number;
    name: string;
    author_name: string;
    author_id: number;
    date: string;
    avatar?: string;
}

export interface ICommentData {
    id: number;
    topic_id: number;
    message: string;
    parent_id: number;
    author_name: string;
    author_id: number;
    date: string;
    children: ICommentData[];
    avatar?: string;
}
