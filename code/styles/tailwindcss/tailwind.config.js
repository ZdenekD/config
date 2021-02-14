import colors from 'tailwindcss/colors';

module.exports = {
    purge: [
        './src/*.html',
        './src/*.js',
        './src/**/*.js',
        './src/*.jsx',
        './src/**/*.jsx',
        './src/*.ts',
        './src/**/*.ts',
        './src/*.tsx',
        './src/**/*.tsx',
        './src/**/*.svelte',
    ],
    darkMode: false,
    theme: {
        extend: {},
        colors,
    },
    variants: {extend: {}},
    plugins: [],
};
