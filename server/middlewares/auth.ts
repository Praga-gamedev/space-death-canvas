import { NextFunction, Request, Response } from 'express';
import { getUser } from 'src/api/auth';

export const authMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const requestCookies = {
        uuid: request?.cookies?.uuid,
        authCookie: request?.cookies?.authCookie,
    };

    response.locals.user = null;

    if (requestCookies.authCookie && requestCookies.uuid) {
        const cookies = Object.entries(requestCookies)
            .map(([key, value]) => `${key}=${value}`)
            .join(';');
        try {
            response.locals.user = await getUser({
                Cookie: cookies,
            });
        } catch (err) {
            console.error(err);
        }
    }

    next();
};
