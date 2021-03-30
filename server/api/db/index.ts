import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import dotenv from 'dotenv';

dotenv.config();

// нижеперечисленные переменные нужно задать в файле .env в корне
const sequelizeOptions: SequelizeOptions = {
    host: process.env.DB_HOST,
    port: Number.parseInt(process.env.DB_PORT!),
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    dialect: 'postgres',
};

export const sequelize = new Sequelize(sequelizeOptions);

export const connectToDb = () => {
    try {
        sequelize.authenticate().then(async () => {
            console.log('Connection to db has been established successfully.');
            // здесь будет прописываться синхронизация модель - база данных
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};
