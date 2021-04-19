const preprocessor = require('svelte-preprocess');

module.exports = {
    stories: ['../src/**/*.stories.js'],
    addons: [
        {
            name: '@storybook/addon-postcss',
            // eslint-disable-next-line global-require
            options: {postcssLoaderOptions: {implementation: require('postcss')}},
        },
        '@storybook/addon-storysource',
        '@storybook/addon-viewport/register',
        '@storybook/addon-docs',
        '@storybook/addon-a11y',
        '@storybook/addon-backgrounds',
    ],
    webpackFinal: async (config, {configType}) => {
        const isProduction = configType === 'production';
        const index = config.module.rules.findIndex(item => item.test.toString() === /\.css$/.toString());
        const svelte = config.module.rules.find(rule => rule.loader && rule.loader.includes('svelte-loader'));

        svelte.options = {
            ...svelte.options,
            preprocess: preprocessor({postcss: true}),
        };

        config.module.rules.splice(index, 1);
        config.module.rules.push({
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {
                    loader: 'css-loader',
                    options: {sourceMap: !isProduction},
                },
                {
                    loader: 'postcss-loader',
                    options: {sourceMap: !isProduction},
                },
            ],
        });

        return config;
    },
};
