import {
    AllowNull,
    Column,
    DataType,
    ForeignKey,
    Model,
    Table,
} from 'sequelize-typescript';
import { Theme } from './Theme.model';

@Table({
    timestamps: false,
    tableName: 'theme_user_mapping',
})
export class ThemeUser extends Model {
    @ForeignKey(() => Theme)
    @AllowNull(false)
    @Column(DataType.INTEGER)
    theme_id: number;

    @AllowNull(false)
    @Column(DataType.STRING)
    user_login: string;
}
