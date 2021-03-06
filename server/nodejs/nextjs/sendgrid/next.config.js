/* eslint-disable @typescript-eslint/no-var-requires */
require('dotenv').config();

const styles = require('./next-css');

const isProduction = process.env.NODE_ENV === 'production';

module.exports = styles({
    cssModules: true,
    cssLoaderOptions: {
        mode: 'local',
        localIdentName: !isProduction ? '[name]-[local]--[hash:base64:4]' : '[hash:base64:5]',
    },
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/,
            exclude: /node_modules|vendor/,
            use: [{loader: '@svgr/webpack'}],
        });

        return config;
    },
    i18n: {
        locales: ['cs'],
        defaultLocale: 'cs',
    },
    env: {SENDGRID_API_KEY: process.env.SENDGRID_API_KEY},
    poweredByHeader: false,
    future: {webpack5: true},
});
