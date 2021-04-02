import {
    AllowNull,
    Column,
    DataType,
    Model,
    Table,
} from 'sequelize-typescript';

@Table({
    timestamps: false,
    tableName: 'themes',
})
export class Theme extends Model {
    @AllowNull(false)
    @Column(DataType.STRING)
    name: number;
}
