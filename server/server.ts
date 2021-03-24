import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import { renderMiddleware } from './middlewares/render';
import hmrMiddlewares from './middlewares/hmr';
import cookieParser from 'cookie-parser';

import { IS_DEV } from '../webpack/env';
import { authMiddleware } from './middlewares/auth';

export const PORT = process.env.PORT || 5000;
export const HOST = `https://local.ya-praktikum.tech:${PORT}`;

const app = express();

app.use(compression())
    .use(cookieParser())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(express.static(path.resolve(__dirname, '../static')));

if (IS_DEV) {
    app.use(...hmrMiddlewares);
}

app.use(authMiddleware);
app.get('/*', renderMiddleware);

export { app };
