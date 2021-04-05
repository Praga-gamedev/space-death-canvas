export interface IComment {
    id?: number;
    topic_id: number;
    message: string;
    parent_id?: number;
    author_name?: string;
    author_id: number;
    date?: Date;
}
