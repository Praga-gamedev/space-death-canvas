import webpack from 'webpack';
import devMiddleware from 'webpack-dev-middleware';
import hotMiddleware from 'webpack-hot-middleware';

import clientConfig from '../../webpack/client.config';

const compiler = webpack({ ...clientConfig, mode: 'development' });

export default [
    hotMiddleware(compiler),
    devMiddleware(compiler, {
        serverSideRender: true,
        writeToDisk: true,
    }),
];
