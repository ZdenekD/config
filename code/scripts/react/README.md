### &#128640; [React](https://reactjs.org/)

**Packages**

    @babel/core
    @babel/preset-env
    @babel/preset-react
    babel-eslint
    babel-jest
    core-js@3
    enzyme
    enzyme-adapter-react-16
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
    babel-plugin-react-remove-properties

**Install**

    yarn add -D @babel/core @babel/preset-env @babel/preset-react babel-eslint babel-jest core-js@3 enzyme enzyme-adapter-react-16 eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks jest jest-enzyme jest-serializer-html babel-plugin-react-remove-properties

**Useful**

    yarn add -D @loadable/babel-plugin

---

#### &#128640; [Babel](https://babeljs.io)

-   Config for version 7+ with 'env' preset

**Config**

    /code/scripts/react/.babelrc

---

#### &#128640; [Eslint](https://babeljs.io)

-   Config file with added some rules for JSX / React

**Config**

    /code/scripts/react/.eslintrc
    /code/scripts/.eslintignore

---

#### &#128640; [Jest](https://jestjs.io/)

-   Base config for using Jest testing framework
-   [Eslint plugin for Jest](https://github.com/jest-community/eslint-plugin-jest)
-   [Babel remove attributes](https://www.npmjs.com/package/babel-plugin-react-remove-properties) - remove `data-test` attributes for production (babel-plugin-react-remove-properties)

**Config**

    /code/scripts/react/jest/jest.config.js

---

-   Setup file for using `jest` with [Enzyme](https://airbnb.io/enzyme/)

**Setup**

    /code/scripts/utils/enzyme.js

---

-   Transform helpers

**Helpers**

    /code/scripts/utils/transform/css.js
    /code/scripts/utils/transform/file.js
