import path from 'path';
import chalk from 'chalk';
import dotenv from 'dotenv';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import DefinePlugin from 'extended-define-webpack-plugin';
import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlReplaceWebpackPlugin from 'html-replace-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ProgressPlugin from 'progress-bar-webpack-plugin';
import config from './config.json';

const env = dotenv.config().parsed;
const isProduction = process.env.NODE_ENV === 'production';
const {
    entry = './src/index.js',
    output = 'dist',
    html = './src/index.html',
    styles,
    assets,
} = config;
const plugins = [];

// HTML webpack plugin
plugins.push(
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, html),
        inject: 'body',
        minify: {
            collapseWhitespace: true,
            preserveLineBreaks: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true,
        },
        robots: isProduction ? 'index, follow' : 'noindex, nofollow',
    })
);

// Environment variables
plugins.push(
    new DefinePlugin({env})
);

// CSS extract plugin
if (styles.extract) {
    plugins.unshift(
        new MiniCssExtractPlugin({
            filename: '[fullhash:8].css',
            chunkFilename: '[fullhash:8].css',
        })
    );
}

// Copy and HTML replace webpack plugins
if (assets) {
    const copy = {patterns: []};
    const replace = [];

    Object.keys(assets).forEach(key => {
        copy.patterns.push({
            from: assets[key],
            to: key,
        });

        replace.push({
            pattern: assets[key],
            replacement: key,
        });
    });

    copy.patterns.push({
        from: './robots.txt',
        to: '',
    });

    plugins.push(new CopyWebpackPlugin(copy), new HtmlReplaceWebpackPlugin(replace));
}

// Image minification plugin
plugins.push(
    new ImageminPlugin({
        disable: !isProduction,
        context: 'src',
        destination: path.resolve(__dirname, output),
        gifsicle: {
            optimizationLevel: 3,
            interlaced: true,
            colors: 10,
        },
        mozjpeg: {
            progressive: true,
            quality: 90,
        },
        pngquant: {
            speed: 1,
            quality: 90,
        },
        svgo: {plugins: [{removeViewBox: false}, {cleanupIDs: true}]},
        webp: {quality: 90},
    })
);

// Favicons plugin
if (config.favicons) {
    plugins.push(new FaviconsWebpackPlugin({...config.favicons}));
}

// Progress bar plugin
plugins.push(new ProgressPlugin({format: `Building [:bar] ${chalk.green.bold(':percent')} (:elapsed seconds)`}));

export default () => ({
    entry,
    output: {
        filename: '[fullhash:8].js',
        chunkFilename: '[fullhash:8].js',
        path: path.resolve(__dirname, output),
        publicPath: '/',
    },
    plugins,
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.ts',
            '.tsx',
        ],
        alias: {'react-dom': '@hot-loader/react-dom'},
    },
    devServer: {
        contentBase: path.resolve(__dirname, output),
        historyApiFallback: true,
        noInfo: true,
        port: env.WEBPACK_PORT || 3010,
        hot: true,
        open: true,
        compress: true,
    },
    devtool: !isProduction ? 'inline-source-map' : undefined,
    stats: 'errors-only',
    context: __dirname,
    target: 'web',
    module: {
        rules: [
            {
                test: /\.(js|ts)x?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [{loader: 'babel-loader?cacheDirectory'}],
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                use: [
                    styles.extract
                        ? {loader: MiniCssExtractPlugin.loader}
                        : {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'local',
                                localIdentName: !isProduction ? '[name]-[local]--[hash:base64:6]' : '[hash:base64:8]',
                                localIdentContext: path.resolve(__dirname, 'src'),
                            },
                            sourceMap: !isProduction,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {sourceMap: !isProduction},
                    },
                ],
            },
            {
                test: /\.(gif|png|jpe?g|webp)$/i,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                exclude: /node_modules/,
                use: ['@svgr/webpack'],
            },
            {
                test: /\.woff2?$/,
                exclude: /node_modules/,
                type: 'asset/resource',
            },
        ],
    },
});
