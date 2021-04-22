export interface IRow {
    date: string;
    author_name: string;
    parent_id?: number;
    message: string;
    topicId: number;
    id: number;
    children?: Record<string, any>;
}
