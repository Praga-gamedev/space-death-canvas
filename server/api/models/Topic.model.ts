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

import { ITopic } from '../interfaces';

import { Comment } from './Comment.model';

@Table({
    tableName: 'topics',
    updatedAt: false,
})
export class Topic extends Model<ITopic> {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    id!: number;

    @AllowNull(false)
    @Column(DataType.STRING(60))
    name: string;

    @Column(DataType.STRING(20))
    author_name: string;

    @AllowNull(false)
    @Column(DataType.INTEGER)
    author_id: number;

    @AllowNull(false)
    @CreatedAt
    @Column(DataType.DATE)
    date: Date;

    @HasMany(() => Comment)
    comments: Comment[];
}
