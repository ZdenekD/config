### &#128466; [BackstopJS](https://github.com/garris/BackstopJS)

-   Visual regression testing comparing DOM screenshots
-   Settings go through node script. It's needed to have `localhost.json` file with local url (where can we found html files to test)
-   Sample of `localhost.json` file is in `/project/localhost.json.sample`

**Config**

    /code/html/backstop/backstop.js

**Packages**

    backstopjs

**Install**

    yarn add -D backstopjs

---

### &#128466; [Cypress](https://www.cypress.io)

-   End-to-end web testing

**Config**

    /code/html/cypress/cypress.json

**Package**

    cypress

**Install**

    yarn add -D cypress

### &#128466; [Percy](https://percy.io)

-   Visual tests
-   It's good to use with `cypress` (but it's not only possibility)

**Config**

    /code/html/percy/.percy.yml

**Packages**

    @percy/cypress

**Install**

    yarn add -D @percy/cypress

---

### &#128466; [Storybook](https://storybook.js.org)

-   Build and document UI components

### React

-   In `main.js` is webpack styles rules overwritten by my own rule

**Packages**

    @storybook/react
    @storybook/addon-storysource
    @storybook/addon-viewport
    @storybook/addon-docs

**Install**

    yarn add -D @storybook/react @storybook/addon-storysource @storybook/addon-viewport @storybook/addon-docs

---

### &#128466; [TestCafe](https://devexpress.github.io/testcafe/)

-   End-to-end web testing

**Config**

    /code/html/testcafe/.testcaferc.json

**Packages**

    testcafe

**Install**

    yarn add -D testcafe

---

### &#128466; [Webhint](https://webhint.io)

-   Complex site tests

**Config**

    /code/html/webhint/.hintrc

**Packages**

    hint

**Install**

    yarn add -D hint
