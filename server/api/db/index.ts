import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';

import { Topic, Comment, Theme, ThemeUser } from '../models';
import { IS_DEV } from '../../../webpack/env';

dotenv.config();

const DB_HOST = IS_DEV ? 'localhost' : process.env.DB_HOST;

const sequelizeOptions: SequelizeOptions = {
    host: DB_HOST,
    port: Number.parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

sequelize.addModels([Topic, Comment, Theme, ThemeUser]);

export const connectToDb = () => {
    try {
        sequelize.authenticate().then(async () => {
            console.log('Connection to db has been established successfully.');
            sequelize.sync({ alter: true });
            const themes = await Theme.findAll();
            if (themes.length === 0) {
                await Theme.bulkCreate([
                    {
                        name: 'dark',
                    },
                    {
                        name: 'light',
                    },
                ]);
            }
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
