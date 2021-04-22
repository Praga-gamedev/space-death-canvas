import { Router } from 'express';

import { CommentController } from '../controllers';

import { auth } from '../middlewares';

export const commentRouter = (router: Router) => {
    const commentRouter = Router();

    commentRouter
        .get('/:topic_id', CommentController.getList)
        .get('/:topic_id/:id', CommentController.getById)
        .post('/', CommentController.create)
        .delete('/', CommentController.delete)
        .put('/', CommentController.update);

    router.use('/comment', [auth], commentRouter);
};
