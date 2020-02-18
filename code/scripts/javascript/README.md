### Vanilla javascript

**Packages**

    @babel/core
    @babel/preset-env
    babel-eslint
    babel-jest
    core-js@3
    eslint
    eslint-config-airbnb-base
    eslint-plugin-import
    eslint-plugin-jest
    jest
    jest-serializer-html

---

#### [Babel](https://babeljs.io)

-   Config for version 7+ with 'env' preset

**Config**

    /code/scripts/javascript/.babelrc

---

#### [Eslint](https://eslint.org/)

**Config**

    /code/scripts/javascript/.eslintrc
    /code/scripts/.eslintignore

---

#### [Jest](https://jestjs.io/)

-   Base config for using Jest testing framework
-   [Eslint plugin for Jest](https://github.com/jest-community/eslint-plugin-jest)

**Config**

    /code/scripts/javascript/jest/jest.config.js

---

-   Setup file for using `jest` with [Enzyme](https://airbnb.io/enzyme/)

**Setup**

    /code/scripts/utils/enzyme.js

---

-   Transform helpers

**Helpers**

    /code/scripts/utils/transform/css.js
    /code/scripts/utils/transform/file.js
