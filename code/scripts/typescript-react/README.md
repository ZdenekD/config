### &#128640; [Typescript](https://www.typescriptlang.org/)

**Packages**

    @babel/core
    @babel/preset-env
    @babel/preset-react
    @babel/preset-typescript
    @typescript-eslint/eslint-plugin
    @typescript-eslint/parser
    core-js@3
    enzyme
    @wojtekmaj/enzyme-adapter-react-17
    eslint
    eslint-config-airbnb-base
    eslint-plugin-import
    eslint-plugin-jest
    eslint-plugin-jsx-a11y
    eslint-plugin-react
    eslint-plugin-react-hooks
    jest
    jest-enzyme
    jest-serializer-html
    babel-jest
    identity-obj-proxy

**Install**

    yarn add -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript @typescript-eslint/eslint-plugin @typescript-eslint/parser core-js@3 enzyme @wojtekmaj/enzyme-adapter-react-17 eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks jest jest-enzyme jest-serializer-html babel-jest identity-obj-proxy

---

#### &#128640; [Typescript](https://www.typescriptlang.org/)

**Config**

    /code/scripts/typescript/tsconfig.json

---

#### &#128640; [Eslint](https://eslint.org/)

**Config**

    /code/scripts/typescript/.eslintrc
    /code/scripts/.eslintignore

---

#### &#128640; [Jest](https://jestjs.io/)

-   Base config for using Jest testing framework
-   [Eslint plugin for Jest](https://github.com/jest-community/eslint-plugin-jest)

**Config**

    /code/scripts/typescript/jest.config.js

-   Setup file for using `jest` with [Enzyme](https://airbnb.io/enzyme/)

**Setup**

    /code/scripts/utils/setup.js

-   Transform helpers

**Helpers**

    /code/scripts/utils/transform/css.js
    /code/scripts/utils/transform/file.js
    /code/scripts/utils/transform/svg.js
