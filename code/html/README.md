### [BackstopJS](https://github.com/garris/BackstopJS)

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

### [Cypress](https://www.cypress.io)

-   End-to-end web testing

**Config**

    /code/html/cypress/cypress.json

**Package**

    cypress

**Install**

    yarn add -D cypress

### [Pa11y](https://pa11y.org/)

-   Accessibility tests
-   Settings go through node script. It's needed to have `config.json` file with settings

**Config**

    /code/html/pa11y/pa11y.js

**Packages**

    pa11y
    pa11y-reporter-html

**Install**

    yarn add -D pa11y pa11y-reporter-html

---

### [Percy](https://percy.io)

-   Visual tests
-   It's good to use with `cypress` (but it's not only possibility)

**Config**

    /code/html/percy/.percy.yml

**Packages**

    @percy/cypress

**Install**

    yarn add -D @percy/cypress

---

### [Storybook](https://storybook.js.org)

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

### [TestCafe](https://devexpress.github.io/testcafe/)

-   End-to-end web testing

**Config**

    /code/html/testcafe/.testcaferc.json

**Packages**

    testcafe

**Install**

    yarn add -D testcafe

---

### [Webhint](https://webhint.io)

-   Complex site tests

**Config**

    /code/html/webhint/.hintrc

**Packages**

    hint

**Install**

    yarn add -D hint
