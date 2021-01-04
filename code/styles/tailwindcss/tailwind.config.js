const colors = require('tailwindcss/colors');

module.exports = {
    purge: [
        './src/*.html',
        './src/*.js',
        './src/**/*.js',
        './src/*.jsx',
        './src/**/*.jsx',
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
