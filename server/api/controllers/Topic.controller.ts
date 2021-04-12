import { Request, Response } from 'express';

import { Topic } from '../models/Topic.model';

const createError = (err: any, defaultMessage = 'Something went wrong') => ({
    message: err.message || defaultMessage,
});

export default class TopicController {
    public static async create(req: Request, res: Response) {
        const { name } = req.body;

        if (!name) {
            res.status(400).send({
                message: 'Topic name can not be empty',
            });
            return;
        }

        try {
            const topic = await Topic.create({
                name,
                author_name: req.user.login,
                author_id: req.user.id,
            });

            res.send(topic);
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async update(req: Request, res: Response) {
        const { id, name } = req.body;

        if (!name) {
            res.status(400).send({
                message: 'Topic name can not be empty',
            });
            return;
        }

        try {
            const [num] = await Topic.update(
                {
                    name,
                },
                {
                    where: {
                        id,
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
                    message: `Cannot update Topic with id ${id}`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async delete(req: Request, res: Response) {
        const { id } = req.body;

        try {
            const num = await Topic.destroy({
                where: { id, author_id: req.user.id },
            });

            if (num === 1) {
                res.send({
                    message: 'Topic was deleted successfully',
                });
            } else {
                res.status(400).send({
                    message: `Cannot delete Topic with id ${id}`,
                });
            }
        } catch (err) {
            res.status(500).send(createError(err));
        }
    }

    public static async getById(req: Request, res: Response) {
        const { id } = req.params;

        try {
            const topic = await Topic.findByPk(id);

            if (topic) {
                res.send(topic);
            } else {
                res.status(400).send({
                    message: `Topic with id ${id} not exist`,
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
