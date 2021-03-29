import 'babel-polyfill';
import path from 'path';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { sequelize } from './db';

import { authMiddleware } from './middlewares/auth';
import { renderMiddleware } from './middlewares/render';
import hmrMiddlewares from './middlewares/hmr';

import { IS_DEV } from '../webpack/env';
import { apiRouter } from './routes';

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
    .use(express.json())
    .use(cookieParser())
    .use(express.static(path.resolve(__dirname, '../static')))
    .use(apiRouter);

if (!IS_DEV) {
    app.use(express.static(path.resolve(__dirname, '../dist')));
}

if (IS_DEV) {
    app.use(...hmrMiddlewares);
}

app.use(authMiddleware);
app.get('/*', renderMiddleware);

export { app };
