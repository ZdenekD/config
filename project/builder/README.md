### [Webpack](https://webpack.js.org/)

-   Webpack builder config files
-   It loads configuration from `config.json` file in project root
-   It uses HMR (Hot Modules Reload) - for using it look at [HotLoader / React](https://github.com/gaearon/react-hot-loader#hot-loaderreact-dom)
-   It uses `postcss` and `css-modules`

**Config**

#### version 4

    /project/builder/webpack/v4/default/webpack.config.babel.js

#### version 5

    /project/builder/webpack/v5/default/webpack.config.babel.js

**Dependencies**

    Webpack
        webpack
        webpack-cli
        webpack-dev-server

    Loaders
        babel-loader
        css-loader
        file-loader
        postcss-loader
        style-loader
        @svgr/webpack
        svelte-loader

    Plugins
        copy-webpack-plugin
        extended-define-webpack-plugin
        favicons-webpack-plugin
        html-replace-webpack-plugin
        html-webpack-plugin
        imagemin-webpack-plugin
        mini-css-extract-plugin
        progress-bar-webpack-plugin

    Others
        @babel/register
        @hot-loader/react-dom
        dotenv
        svelte-preprocess

**Install**

    yarn add -D webpack webpack-cli webpack-dev-server chalk babel-loader css-loader file-loader postcss-loader style-loader @svgr/webpack copy-webpack-plugin extended-define-webpack-plugin favicons-webpack-plugin html-replace-webpack-plugin html-webpack-plugin imagemin-webpack-plugin mini-css-extract-plugin progress-bar-webpack-plugin @babel/register @hot-loader/react-dom dotenv

---

#### Without css file extract

-   Webpack config file without extracting css file (it's used e.g. if we send some component with styles to 3rd party customer)

**Config.json**

```
"styles": {
    "extract": false
}
```

---

#### With css file extract

**Config.json**

```
"styles": {
    "extract": true
}
```

---

#### With favicons generator

**Config.json**

```
"favicons": {
    "cache": true,
    "logo": "./favicon.png",
    "prefix": "[hash:base64:8]",
    "favicons": {
        "appName": "App Name",
        "appDescription": "App Description",
        "developerName": "Developer",
        "developerURL": "https://develop.er",
        "background": "#fff",
        "icons": {
            "android": true,
            "appleIcon": true,
            "appleStartup": true,
            "coast": true,
            "favicons": true,
            "firefox": true,
            "windows": true,
            "yandex": true
        }
    }
}
```

---

#### With Svelte

**Config**

    /project/builder/webpack/v4/svelte/webpack.config.babel.js

**Install**

    yarn add -D webpack webpack-cli webpack-dev-server chalk babel-loader css-loader file-loader postcss-loader style-loader svelte-loader svelte-preprocess @svgr/webpack copy-webpack-plugin extended-define-webpack-plugin favicons-webpack-plugin html-replace-webpack-plugin html-webpack-plugin imagemin-webpack-plugin mini-css-extract-plugin progress-bar-webpack-plugin @babel/register dotenv
