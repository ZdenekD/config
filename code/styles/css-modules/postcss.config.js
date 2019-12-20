module.exports = () => ({
    modules: true,
    map: process.env.NODE_ENV === 'development',
    plugins: {
        stylelint: {},
        'postcss-import': {},
        'postcss-nested': {},
        'postcss-normalize': {},
        'postcss-preset-env': {
            stage: 1,
        },
        'css-mqpacker': {
            sort: true,
        },
        'postcss-modules': {
            generateScopedName: process.env.NODE_ENV === 'development' ? '[name]-[local]--[hash:base64:6]' : '[hash:base64:8]',
        },
        'postcss-reporter': {
            clearReportedMessages: true,
        },
        cssnano: process.env.NODE_ENV !== 'development',
    },
});
