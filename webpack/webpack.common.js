const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

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
            '@icons': path.resolve(__dirname, '../src/assets/icons'),
            '@images': path.resolve(__dirname, '../src/assets/images'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@pages': path.resolve(__dirname, '../src/pages'),
            '@types': path.resolve(__dirname, '../src/types'),
            '@store': path.resolve(__dirname, '../src/store'),
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
    ],
};
