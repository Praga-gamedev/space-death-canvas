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
} from 'sequelize-typescript';

@Table
export class Topic extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    topic_id: number;

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
}

@Table
export class Comment extends Model {
    @AutoIncrement
    @PrimaryKey
    @Column(DataType.INTEGER)
    comment_id: number;

    @ForeignKey(() => Topic)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    topic_id: number;

    @AllowNull(false)
    @Column(DataType.TEXT)
    comment_message: string;

    @BelongsTo(() => Comment)
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
    like: Number;
}
