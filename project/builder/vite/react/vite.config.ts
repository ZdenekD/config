import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

export default defineConfig({
    plugins: [reactRefresh()],
    esbuild: {jsxInject: 'import React from \'react\''},
    css: {modules: {generateScopedName: process.env.NODE_ENV === 'production' ? '[hash:base64:8]' : '[name]-[local]--[hash:base64:6]'}},
});
