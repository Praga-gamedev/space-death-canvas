import path from 'path';
import {
    Configuration,
    // @ts-ignore
    Plugin,
    Entry,
    HotModuleReplacementPlugin,
    ProvidePlugin,
} from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import CompressionPlugin from 'compression-webpack-plugin';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

import { IS_DEV, DIST_DIR, SRC_DIR } from './env';
import fileLoader from './loaders/file';
import cssLoader from './loaders/css';
import jsLoader from './loaders/js';

const entries = IS_DEV
    ? [
          // HMR
          // 'react-hot-loader/patch',
          // 'webpack-hot-middleware/client',
          // 'css-hot-loader/hotModuleReplacement',
      ]
    : [];

const config: Configuration = {
    entry: ([...entries, path.join(SRC_DIR, 'client')].filter(
        Boolean
    ) as unknown) as Entry,
    module: {
        rules: [fileLoader.client, cssLoader.client, jsLoader.client],
    },
    output: {
        path: DIST_DIR,
        filename: '[name].js',
        publicPath: '/',
    },
    resolve: {
        modules: ['src', 'node_modules'],
        alias: { 'react-dom': '@hot-loader/react-dom' },
        extensions: ['*', '.js', '.jsx', '.json', '.ts', '.tsx'],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    plugins: [
        new MiniCssExtractPlugin({ filename: '[name].css' }),
        !IS_DEV && new CompressionPlugin(),
        IS_DEV && new HotModuleReplacementPlugin(),
        new ProvidePlugin({
            process: 'process/browser',
        }),
    ].filter(Boolean) as Plugin[],

    devtool: 'source-map',
};

export default config;
