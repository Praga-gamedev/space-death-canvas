import 'babel-polyfill';
import path from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { authMiddleware } from './middlewares/auth';
import { renderMiddleware } from './middlewares/render';
import hmrMiddlewares from './middlewares/hmr';

import { IS_DEV } from '../webpack/env';
import { sequelize } from './db';

export const PORT = process.env.PORT || 5000;
export const HOST = `https://local.ya-praktikum.tech:${PORT}`;

try {
    sequelize.authenticate().then(async () => {
        console.log('Connection to db has been established successfully.');
        // здесь будет прописываться синхронизация модель - база данных
    });
} catch (error) {
    console.error('Unable to connect to the database:', error);
}

const app = express();

app.use(compression())
    .use(cookieParser())
    .use(express.static(path.resolve(__dirname, '../static')));

if (!IS_DEV) {
    app.use(express.static(path.resolve(__dirname, '../dist')));
}

if (IS_DEV) {
    app.use(...hmrMiddlewares);
}

app.use(authMiddleware);
app.get('/*', renderMiddleware);

export { app };
