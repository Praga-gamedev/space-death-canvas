import { Response, Request, NextFunction } from 'express';
import axios from 'axios';

import { YANDEX_HOST } from 'src/utils/api/YandexApi';

export const auth = async (req: Request, res: Response, next: NextFunction) => {
    const cookies = Object.entries(req.cookies)
        .map(([key, value]) => `${key}=${value}`)
        .join(';');

    const headers = { Cookie: cookies };

    try {
        const user = await axios.get(`${YANDEX_HOST}/api/v2/auth/user`, {
            headers,
        });
        req.user = user.data;
        next();
    } catch (err) {
        const { status, data } = err.response;
        res.status(status).send(data);
    }
};
