import { Request, Response } from 'express';

import { Comment } from '../models';

import { flatCommentsToTree } from '../utils';

const createError = (err: any, defaultMessage = 'Something went wrong') => ({
    message: err.message || defaultMessage,
});

export default class CommentController {
    public static async create(req: Request, res: Response) {
        const { topic_id } = req.params;
        const { comment_message, parent_comment_id } = req.body;

        if (!comment_message) {
            res.status(400).send({
                message: 'Comment message can not be empty',
            });
            return;
        }

        try {
            const comment = await Comment.create({
                topic_id: Number(topic_id),
                comment_message,
                comment_author: req.user.login,
                author_id: req.user.id,
                parent_comment_id,
            });

            res.send(comment);
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async update(req: Request, res: Response) {
        const { topic_id } = req.params;
        const { comment_message, comment_id } = req.body;

        if (!comment_message) {
            res.status(400).send({
                message: 'Comment message can not be empty',
            });
            return;
        }

        try {
            const [num] = await Comment.update(
                {
                    comment_message,
                },
                { where: { comment_id, topic_id, author_id: req.user.id } }
            );

            if (num === 1) {
                res.send({
                    message: 'Comment was updated successfully',
                });
            } else {
                res.status(400).send({
                    message: `Cannot update Comment with id ${comment_id}`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async delete(req: Request, res: Response) {
        const { topic_id } = req.params;
        const { comment_id } = req.body;

        try {
            const num = await Comment.destroy({
                where: { comment_id, topic_id, author_id: req.user.id },
            });

            if (num === 1) {
                res.send({
                    message: 'Comment was deleted successfully',
                });
            } else {
                res.status(400).send({
                    message: `Cannot delete Comment with id ${comment_id}`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async getById(req: Request, res: Response) {
        const { topic_id, comment_id } = req.params;

        try {
            const comment = await Comment.findOne({
                where: { comment_id, topic_id },
            });

            if (comment) {
                res.send(comment);
            } else {
                res.status(400).send({
                    message: `Comment with id ${comment_id} is not exist`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async getList(req: Request, res: Response) {
        const { topic_id } = req.params;

        try {
            const comments = await Comment.findAll({
                where: { topic_id },
                raw: true,
            });

            res.send(flatCommentsToTree(comments));
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }
}
