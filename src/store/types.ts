export type TState = Record<string, any>;

export interface IUserProps {
    id: number;
    first_name: string;
    second_name: string;
    display_name: string;
    login: string;
    email: string;
    phone: string;
    avatar: string;
}

export interface IInitOptions {
    silent?: boolean;
}

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
