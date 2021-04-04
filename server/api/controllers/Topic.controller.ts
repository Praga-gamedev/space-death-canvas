import { Request, Response } from 'express';

import { Topic } from '../models/Topic.model';

const createError = (err: any, defaultMessage = 'Something went wrong') => ({
    message: err.message || defaultMessage,
});

export default class TopicController {
    public static async create(req: Request, res: Response) {
        const { topic_name } = req.body;

        if (!topic_name) {
            res.status(400).send({
                message: 'Topic name can not be empty',
            });
            return;
        }

        try {
            const topic = await Topic.create({
                topic_name,
                topic_author: req.user.login,
                author_id: req.user.id,
            });

            res.send(topic);
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async update(req: Request, res: Response) {
        const { topic_id, topic_name } = req.body;

        if (!topic_name) {
            res.status(400).send({
                message: 'Topic name can not be empty',
            });
            return;
        }

        try {
            const [num] = await Topic.update(
                {
                    topic_name,
                },
                {
                    where: {
                        topic_id,
                        author_id: req.user.id,
                    },
                }
            );

            if (num === 1) {
                res.send({
                    message: 'Topic was updated successfully',
                });
            } else {
                res.status(400).send({
                    message: `Cannot update Topic with id ${topic_id}`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async delete(req: Request, res: Response) {
        const { topic_id } = req.body;

        try {
            const num = await Topic.destroy({
                where: { topic_id, author_id: req.user.id },
            });

            if (num === 1) {
                res.send({
                    message: 'Topic was deleted successfully',
                });
            } else {
                res.status(400).send({
                    message: `Cannot delete Topic with id ${topic_id}`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async getById(req: Request, res: Response) {
        const { topic_id } = req.params;

        try {
            const topic = await Topic.findByPk(topic_id);
            if (topic) {
                res.send(topic);
            } else {
                res.status(400).send({
                    message: `Topic with id ${topic_id} not exist`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async getList(_: any, res: Response) {
        try {
            const topics = await Topic.findAll();
            res.send(topics);
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }
}
