import path from 'path';
import express from 'express';
import compression from 'compression';
import 'babel-polyfill';
import { serverMiddleware } from './middlewares/render';
import hmrMiddlewares from './middlewares/hmr';

import { IS_DEV } from '../webpack/env';

const app = express();

app.use(compression())
    .use(express.static(path.resolve(__dirname, '../dist')))
    .use(express.static(path.resolve(__dirname, '../static')));

if (IS_DEV) {
    app.use(...hmrMiddlewares);
}

app.get('/*', serverMiddleware);

export { app };
