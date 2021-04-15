import 'babel-polyfill';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';

import { connectToDb } from './db';
import { apiRouter } from './routes';
import { initHttpsServer } from '../common/utils';
import { API_PORT, HOST, PORT } from 'src/env';

dotenv.config();

connectToDb();

const app = express();

app.use(express.json())
    .use(cors({ origin: `${HOST}:${PORT}`, credentials: true }))
    .use(cookieParser())
    .use('/api', apiRouter);

initHttpsServer(app).listen(API_PORT, () => {
    console.log('Api express-server started on ', `${HOST}:${API_PORT}`);
});
