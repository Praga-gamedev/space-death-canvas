import {
    Model,
    Table,
    Column,
    DataType,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    ForeignKey,
    CreatedAt,
} from 'sequelize-typescript';

import {Topic} from './index';

@Table
export class Comment extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    comment_id: number;

    @ForeignKey(() => Topic)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    topic_id!: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    comment_message: string;

    @Column(DataType.TEXT)
    parent_comment_id: number;

    @Column(DataType.STRING(20))
    comment_author: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    author_id: string;

    @AllowNull(false)
    @CreatedAt
    @Column(DataType.DATE)
    comment_date: Date;

    @Column(DataType.INTEGER)
    like: number;
}
