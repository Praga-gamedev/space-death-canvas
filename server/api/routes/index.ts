import express, { Request, Response } from 'express';
import { ThemeUser } from '../models/ThemeUser.model';
import { Theme } from '../models';
import { THEME } from '../../../src/theme';

export const apiRouter = express.Router();

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
                const theme = await Theme.findByPk(themeUser.theme_id);
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
            themeUser.theme_id = theme.id;
            await themeUser.save();
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
