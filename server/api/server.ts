import 'babel-polyfill';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import { connectToDb } from './db';
import { authMiddleware } from '../common/middlewares/auth';
import { apiRouter } from './routes';
import { initHttpsServer } from '../common/utils';

dotenv.config();

connectToDb();

const app = express();

app.use(express.json())
    .use(cookieParser())
    .use(authMiddleware)
    .use('/api', apiRouter);

const HOST = process.env.HOST;
const API_PORT = process.env.API_PORT;

initHttpsServer(app).listen(API_PORT, () => {
    console.log('Api express-server started on ', `${HOST}:${API_PORT}`);
});
