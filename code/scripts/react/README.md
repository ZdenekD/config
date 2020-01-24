### [React](https://reactjs.org/)

**Packages**

    @babel/core
    @babel/preset-env
    @babel/preset-react
    babel-eslint
    core-js@3
    eslint
    eslint-config-airbnb-base
    eslint-plugin-import
    eslint-plugin-jest
    eslint-plugin-jsx-a11y
    eslint-plugin-react
    eslint-plugin-react-hooks
    jest

---

#### [Babel](https://babeljs.io)

-   Config for version 7+ with 'env' preset

**Config**

    /code/scripts/react/.babelrc

---

#### [Eslint](https://babeljs.io)

-   Config file with added some rules for JSX / React

**Config**

    /code/scripts/react/.eslintrc
    /code/scripts/.eslintignore

---

#### [Jest](https://jestjs.io/)

-   Base config for using Jest testing framework
-   [Eslint plugin for Jest](https://github.com/jest-community/eslint-plugin-jest)
-   [Babel remove attributes](https://www.npmjs.com/package/babel-plugin-react-remove-properties) - remove `data-test` attributes for production (babel-plugin-react-remove-properties)

**Config**

    /codescripts/react/jest/jest.config.js
