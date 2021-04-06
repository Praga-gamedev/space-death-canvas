import { Router } from 'express';
import ThemeController from '../controllers/Theme.controller';

export const themeRouter = (router: Router) => {
    const themeRouter = Router();

    themeRouter.get('/', ThemeController.get).put('/', ThemeController.set);

    router.use('/theme', themeRouter);
};
