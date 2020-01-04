# CONFIG Files
Cross projects source configuration files.
There's minimal configurations editable for the needs of specific projects.
---
## Cross project tools

### [Browserslist](https://github.com/browserslist/browserslist)
- Targets specific browsers used in different front-end tools

**Config**

    /project/.browserslistrc
---
### [Editorconfig](https://editorconfig.org/)
- Helps maintain consistent coding styles across various editors and IDEs

**Config**

    /project/.editorconfig
---
### [dotenv](https://www.npmjs.com/package/dotenv)
Environment settings

    PORT=3000 - default port used for node server
    WEBPACK_PORT=3010 - webpack port
    PARCEL_PORT=3011 - parcel port
    BROWSERSYNC_PORT=8000 - browsersync port

- [webpack](https://webpack.js.org)
- [parcel](https://parceljs.org)
- [browsersync](https://www.browsersync.io)

**Config**

    /project/.env.sample
---
### [.gitignore](https://git-scm.com/docs/gitignore)
- Git ignore folders and files sample

**Config**

    /project/.gitignore.sample
---
### [.nvmrc](https://github.com/nvm-sh/nvm)
- Set node version for users with nvm
- You can use `nvm use` command to switch to node version in `.nvmrc` file

**Config**

    /project/.nvmrc.sample
---
### [package.json](https://npm.github.io/using-pkgs-docs/package-json/the-package-json-file.html)
- Projects `package.json` sample file with some important records and tasks

- [Webhint](https://webhint.io)
    - install: `yarn add -D hint`

**Config**

    /project/package.json.sample
