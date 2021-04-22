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

import { IComment } from '../interfaces';

import { Topic } from './Topic.model';

@Table({
    tableName: 'comments',
    updatedAt: false,
})
export class Comment extends Model<IComment> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id: number;

    @ForeignKey(() => Topic)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    topic_id!: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    message: string;

    @ForeignKey(() => Comment)
    @Column(DataType.INTEGER)
    parent_id: number;

    @Column(DataType.STRING(50))
    author_name: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    author_id: number;

    @AllowNull(false)
    @CreatedAt
    @Column(DataType.DATE)
    date: Date;

    @BelongsTo(() => Topic)
    topic: Topic;

    @HasMany(() => Comment)
    children: Comment[];
}
