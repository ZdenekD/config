### [BackstopJS](https://github.com/garris/BackstopJS)

-   Visual regression testing comparing DOM screenshots
-   Settings go through node script. It's needed to have `localhost.json` file with local url (where can we found html files to test)

**Node script**

    /code/html/backstop/backstop.js

**Packages**

    backstopjs

---

### [Cypress](https://www.cypress.io)

-   End-to-end web testing

**Config**

    /code/html/cypress/cypress.json

### [Pa11y](https://pa11y.org/)

-   Accessibility tests
-   Settings go through node script. It's needed to have `config.json` file with settings

**Node script**

    /code/html/pa11y/pa11y.js

**Packages**

    pa11y
    pa11y-reporter-html

---

### [TestCafe](https://devexpress.github.io/testcafe/)

-   End-to-end web testing

**Config**

    /code/html/testcafe/.testcaferc.json

**Packages**

    testcafe

---

### [Webhint](https://webhint.io)

-   Complex site tests

**Config**

    /code/html/webhint/.hintrc

**Packages**

    hint
