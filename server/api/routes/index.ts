import { Router } from 'express';

import { topicRouter } from './topicRouter';
import { commentRouter } from './commentRouter';
import { themeRouter } from './themeRouter';

const apiRouter = Router();

themeRouter(apiRouter);
topicRouter(apiRouter);
commentRouter(apiRouter);

export { apiRouter };
