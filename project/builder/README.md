### [Webpack](https://webpack.js.org/)

-   Webpack builder config files
-   It loads configuration from `config.json` file in project root
-   It uses HMR (Hot Modules Reload) - for using it look at [HotLoader / React](https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom)
-   It uses `postcss` and `css-modules`

**Dependencies**

    Webpack
        webpack
        webpack-cli
        webpack-dev-server

    Loaders
        babel-loader
        css-loader
        eslint-loader
        file-loader
        postcss-loader
        style-loader
        @svgr/webpack

    Plugins
        copy-webpack-plugin
        html-replace-webpack-plugin
        html-webpack-plugin
        imagemin-webpack-plugin
        mini-css-extract-plugin

    Others
        @babel/register
        @hot-loader/react-dom
        dotenv

**Tasks**

    "start": "NODE_ENV=development webpack-dev-server --mode development --color --compress --open",
    "build": "yarn clean && yarn format && NODE_ENV=production webpack --mode production"

---

#### Without css file extract

-   Webpack config file without extracting css file (it's used e.g. if we send some component with styles to 3rd party customer)

**Config**

    /project/builder/webpack/no-css-extract/webpack.config.babel.js

**Install**

    yarn add -D webpack webpack-cli webpack-dev-server babel-loader css-loader eslint-loader file-loader postcss-loader style-loader @svgr/webpack copy-webpack-plugin html-replace-webpack-plugin html-webpack-plugin imagemin-webpack-plugin

    yarn add -D @babel/register @hot-loader/react-dom

---

#### With css file extract

**Config**

    /project/builder/webpack/css-extract/webpack.config.babel.js

**Install**

    yarn add -D webpack webpack-cli webpack-dev-server babel-loader css-loader eslint-loader file-loader postcss-loader style-loader @svgr/webpack copy-webpack-plugin html-replace-webpack-plugin html-webpack-plugin imagemin-webpack-plugin

    yarn add -D @babel/register @hot-loader/react-dom

---

#### With favicons generator

**Config**

    /project/builder/webpack/ico-generate/webpack.config.babel.js
    /project/builder/webpack/ico-generate/config.json

**Install**

    yarn add -D webpack webpack-cli webpack-dev-server babel-loader css-loader eslint-loader file-loader postcss-loader style-loader @svgr/webpack copy-webpack-plugin favicons-webpack-plugin html-replace-webpack-plugin html-webpack-plugin imagemin-webpack-plugin

    yarn add -D @babel/register @hot-loader/react-dom

---

#### With js dynamic loadable scripts

**Config**

    /project/builder/webpack/js-loadable/webpack.config.babel.js
