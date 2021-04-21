import { IS_DEV } from '../webpack/env';

export const HOST = IS_DEV
    ? 'https://local.ya-praktikum.tech'
    : 'https://03-praga-space-death-canvas.ya-praktikum.tech';
export const PORT = process.env.PORT ? process.env.PORT : 5000;
export const API_PORT = process.env.API_PORT ? process.env.API_PORT : 5001;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
