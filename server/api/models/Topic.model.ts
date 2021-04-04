import {
    Model,
    Table,
    Column,
    DataType,
    AutoIncrement,
    PrimaryKey,
    AllowNull,
    CreatedAt,
    HasMany,
} from 'sequelize-typescript';

import { Comment } from './Comment.model';

@Table({
    tableName: 'topics',
    updatedAt: false,
})
export class Topic extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    topic_id!: number;

    @AllowNull(false)
    @Column(DataType.STRING(60))
    topic_name: string;

    @Column(DataType.STRING(20))
    topic_author: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    author_id: string;

    @AllowNull(false)
    @CreatedAt
    @Column(DataType.DATE)
    topic_date: Date;

    @HasMany(() => Comment)
    comments: Comment[];
}
