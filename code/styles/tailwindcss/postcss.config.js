module.exports = () => ({
    map: process.env.NODE_ENV === 'development',
    plugins: {
        'postcss-import': {},
        tailwindcss: {},
        'postcss-nested': {},
        'postcss-preset-env': {
            stage: 1,
            features: {'focus-within-pseudo-class': false},
        },
        'postcss-reporter': {clearReportedMessages: true},
    },
});
