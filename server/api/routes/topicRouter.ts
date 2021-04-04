import { Router } from 'express';

import TopicController from '../controllers/Topic.controller';

export const topicRouter = (router: Router) => {
    const topicRouter = Router();

    topicRouter
        .get('/:topic_id', TopicController.getById)
        .get('/', TopicController.getList)
        .post('/', TopicController.create)
        .delete('/', TopicController.delete)
        .put('/', TopicController.update);

    router.use('/topic', topicRouter);
};
