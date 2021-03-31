import { Configuration } from 'webpack';
import nodeExternals from 'webpack-node-externals';

import { DIST_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const getServerConfig = (
    entryPath: string,
    outputFileName: string
): Configuration => ({
    name: 'server',
    target: 'node',
    node: { __dirname: false },
    entry: entryPath,
    module: {
        rules: [fileLoader.server, cssLoader.server, jsLoader.server],
    },
    output: {
        filename: outputFileName,
        libraryTarget: 'commonjs2',
        path: DIST_DIR,
        publicPath: '/static/',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },

    devtool: 'source-map',

    externals: [nodeExternals({ allowlist: [/\.(?!(?:tsx?|json)$).{1,5}$/i] })],

    optimization: { nodeEnv: false },
});

export const ssrConfig = getServerConfig('server/ssr/server', 'server.js');

export const apiConfig = getServerConfig('server/api/server', 'api_server.js');
