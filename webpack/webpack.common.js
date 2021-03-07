const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const path = require('path');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

module.exports = {
    entry: './src/index.tsx',
    output: {
        publicPath: '/',
        path: path.join(__dirname, '../dist'),
        filename: 'bundle.js',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            src: path.resolve(__dirname, '../src/'),
            '@api': path.resolve(__dirname, '../src/api'),
            '@icons': path.resolve(__dirname, '../src/assets/icons'),
            '@images': path.resolve(__dirname, '../src/assets/images'),
            '@sprites': path.resolve(__dirname, '../src/assets/sprites'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@types': path.resolve(__dirname, '../src/types'),
            '@store': path.resolve(__dirname, '../src/store'),
            '@game': path.resolve(__dirname, '../src/game'),
        },
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/,
                use: 'file-loader',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                loader: 'file-loader',
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './public/index.html',
            minify: {
                collapseWhitespace: isProd,
            },
        }),
        new CopyWebpackPlugin({
            patterns: [path.resolve(__dirname, '../src/sw.js')],
        }),
    ],
};
