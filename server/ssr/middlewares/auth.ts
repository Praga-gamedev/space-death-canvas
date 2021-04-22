import { NextFunction, Request, Response } from 'express';

import setCookie from 'set-cookie-parser';

import { getUser, OAuth } from 'src/api/auth';

export const authMiddleware = async (
    request: Request,
    response: Response,
    next: NextFunction
): Promise<void> => {
    const requestCookies = {
        uuid: request.cookies?.uuid,
        authCookie: request.cookies?.authCookie,
    };

    // если делаем OAuth
    const code = request.query.code;
    if (code && !Array.isArray(code)) {
        const result = await OAuth(code as string);

        const cookieHeaders = result.headers['set-cookie'];
        const splitCookieHeaders = setCookie.splitCookiesString(cookieHeaders);
        const cookies = setCookie.parse(splitCookieHeaders);

        /* ВОПРОС РЕВЬЮВЕРУ
         Здесь интересная штука - в ответе от яндекса приходит сразу 2 uuid куки
         и верная из них (при которой дальнейший запрос /auth/user не ложится) - вторая
         Зачем это сделано. Баг?
         */
        requestCookies.uuid = cookies.filter(
            (cookieData) => cookieData.name === 'uuid'
        )[1]?.value;

        requestCookies.authCookie = cookies.find(
            (cookieData) => cookieData.name === 'authCookie'
        )?.value;

        /* ВОПРОС РЕВЬЮВЕРУ
        Если авторизация проходит не успеншно, то на клиенте проставляется uuid кука.
        Почему это так и для чего она нужна?

        Ниже указал домен именно из-за того, что на клиенте уже есть uuid кука
        и если домен не указать, то будет 2 uuid куки - одна от local.ya-praktikum.tech а другая от .ya-praktikum.tech
         */
        response.cookie('uuid', requestCookies.uuid, {
            domain: '.ya-praktikum.tech',
            httpOnly: true,
            secure: true,
        });
        response.cookie('authCookie', requestCookies.authCookie, {
            domain: '.ya-praktikum.tech',
            httpOnly: true,
            secure: true,
        });
    }

    response.locals.user = null;

    if (requestCookies.authCookie && requestCookies.uuid) {
        const cookies = Object.entries(requestCookies)
            .map(([key, value]) => `${key}=${value}`)
            .join(';');
        try {
            response.locals.user = await getUser({
                Cookie: cookies,
            });
        } catch (error) {
            console.error(error);
        }
    }

    next();
};
