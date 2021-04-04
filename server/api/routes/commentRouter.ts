import { Router } from 'express';

import { CommentController } from '../controllers';

import { auth } from '../middlewares';

export const commentRouter = (router: Router) => {
    const commentRouter = Router();

    commentRouter
        .get('/:topic_id', CommentController.getList)
        .get('/:topic_id/:comment_id', CommentController.getById)
        .post('/:topic_id', CommentController.create)
        .delete('/:topic_id', CommentController.delete)
        .put('/:topic_id', CommentController.update);

    router.use('/comment', [auth], commentRouter);
};
