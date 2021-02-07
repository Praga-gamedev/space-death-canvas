const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, "../dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: ['.tsx','.ts','.js'],
        alias: {
            'src': path.resolve(__dirname, '../src/'),
            '@components': path.resolve(__dirname, '../src/components'),
            '@types': path.resolve(__dirname, '../src/types'),
            '@store': path.resolve(__dirname, '../src/store'),
        }
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ]
};
