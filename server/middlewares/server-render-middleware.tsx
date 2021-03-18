import React from 'react';
import { renderToString } from 'react-dom/server';
import { Request, Response } from 'express';
import App from 'src/App';

export const serverMiddleware = (req: Request, res: Response) => {
    const jsx = <App />;
    const reactHtml = renderToString(jsx);
    res.send(getHtml(reactHtml));
};

function getHtml(reactHtml: string) {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="shortcut icon" type="image/png" href="/images/favicon.jpg">
        <title>SSR TEST PROJ</title>
        <link href="/main.css" rel="stylesheet">
    </head>
    <body>
        <div id="root">${reactHtml}</div>
        <script src="/main.js"></script>
    </body>
    </html>
    `;
}
