export interface IComment {
    comment_id?: number;
    topic_id: number;
    comment_message: string;
    parent_comment_id?: number;
    comment_author?: string;
    author_id: number;
    comment_date?: Date;
}
