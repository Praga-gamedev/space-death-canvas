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
    BelongsTo,
    HasMany,
} from 'sequelize-typescript';

import { Topic } from './Topic.model';

@Table({
    tableName: 'comments',
    updatedAt: false,
})
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

    @ForeignKey(() => Comment)
    @Column(DataType.INTEGER)
    parent_comment_id: number;

    @Column(DataType.STRING(50))
    comment_author: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    author_id: string;

    @AllowNull(false)
    @CreatedAt
    @Column(DataType.DATE)
    comment_date: Date;

    @BelongsTo(() => Topic)
    topic: Topic;

    @HasMany(() => Comment)
    children: Comment[];
}
