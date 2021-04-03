export const HOST = process.env.HOST
    ? process.env.HOST
    : 'https://local.ya-praktikum.tech';
export const PORT = process.env.PORT ? process.env.PORT : 5000;
export const API_PORT = process.env.API_PORT ? process.env.API_PORT : 5001;
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
