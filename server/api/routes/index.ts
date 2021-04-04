import { Request, Response, Router } from 'express';

import { Theme, ThemeUser } from '../models';
import { THEME } from 'src/theme';
import { topicRouter } from './topicRouter';

const apiRouter = Router();

apiRouter.get('/theme', async (request: Request, response: Response) => {
    try {
        const userLogin = request.query.user_login;

        if (userLogin) {
            const themeUser = await ThemeUser.findOne({
                where: {
                    user_login: userLogin,
                },
            });
            if (themeUser) {
                const theme = await Theme.findByPk(
                    themeUser.getDataValue('theme_id')
                );
                return response.json(theme);
            }
        }
        const defaulTheme = await Theme.findOne({
            where: {
                name: THEME.DARK,
            },
        });
        return response.json(defaulTheme);
    } catch (err) {
        response.status(500).json(err);
    }
});

apiRouter.put('/theme', async (request: Request, response: Response) => {
    try {
        const { userLogin, themeName } = request.body;

        const theme = await Theme.findOne({
            where: {
                name: themeName,
            },
        });

        const themeUser = await ThemeUser.findOne({
            where: {
                user_login: userLogin,
            },
        });

        if (themeUser) {
            await ThemeUser.update(
                {
                    theme_id: theme.id,
                },
                {
                    where: {
                        user_login: userLogin,
                    },
                }
            );
        } else {
            await ThemeUser.create({
                theme_id: theme.id,
                user_login: userLogin,
            });
        }
        response.status(200);
    } catch (err) {
        response.status(500).json(err);
    }
});

topicRouter(apiRouter);

export { apiRouter };
