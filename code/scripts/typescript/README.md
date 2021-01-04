### &#128640; [Typescript](https://www.typescriptlang.org/)

**Packages**

    @typescript-eslint/eslint-plugin
    @typescript-eslint/parser
    @typescript-eslint/typescript-estree
    typescript
    @babel/eslint-parser
    eslint
    eslint-config-airbnb-base
    eslint-plugin-import
    eslint-plugin-jest
    jest
    ts-jest
    jest-serializer-html

**Install**

    yarn add -D @typescript-eslint/eslint-plugin @typescript-eslint/parser @typescript-eslint/typescript-estree typescript @babel/eslint-parser eslint eslint-config-airbnb-base eslint-plugin-import eslint-plugin-jest jest ts-jest jest-serializer-html

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

    /code/scripts/utils/enzyme.js

-   Transform helpers

**Helpers**

    /code/scripts/utils/transform/css.js
    /code/scripts/utils/transform/file.js
    /code/scripts/utils/transform/svg.js
