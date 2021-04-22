import 'babel-polyfill';
import path from 'path';
import dotenv from 'dotenv';
import express from 'express';
import compression from 'compression';
import cookieParser from 'cookie-parser';

import { authMiddleware } from './middlewares/auth';
import { renderMiddleware } from './middlewares/render';
import { initHttpsServer } from '../common/utils';
import { HOST, PORT } from 'src/env';

dotenv.config();

const app = express();

app.use(compression())
    .use(express.json())
    .use(cookieParser())
    .use(express.static(path.resolve(__dirname, '../static')))
    .use(express.static(path.resolve(__dirname, '../dist')));

// HMR
// if (IS_DEV){
//     app.use(...hmrMiddlewares)
// }else{
//     app.use(express.static(path.resolve(__dirname, '../dist')));
// }

app.use(authMiddleware);
app.get('/*', renderMiddleware);

initHttpsServer(app).listen(PORT, () => {
    console.log('Application is started on ', `${HOST}:${PORT}`);
});
