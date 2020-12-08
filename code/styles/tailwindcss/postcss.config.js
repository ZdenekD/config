module.exports = () => ({
    map: process.env.NODE_ENV === 'development',
    plugins: {
        stylelint: process.env.NODE_ENV === 'development' ? {} : false,
        'postcss-import': {},
        tailwindcss: {},
        'postcss-nested': {},
        'postcss-normalize': {},
        'postcss-preset-env': {
            stage: 1,
            features: {'focus-within-pseudo-class': false},
        },
        'postcss-reporter': {clearReportedMessages: true},
        cssnano: process.env.NODE_ENV === 'production',
    },
});
