# Name of the project

[![code style: eslint](https://img.shields.io/badge/code%20style-eslint-%23463fd4)](https://eslint.org)
[![code style: stylelint](https://img.shields.io/badge/code%20style-stylelint-success)](https://stylelint.io)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

## Installing / Getting started

Instruction of the minimal setup

---

### Setting up Dev

Description how to set project on local machine

```
git clone https://github.com/repo/your-project.git
cd your-project/
yarn
```

### Development

### Building

Build project before deploy

```
yarn build
```

## Tests

How to run and write tests

### Jest

```shell
yarn jest
yarn jest:coverage
```

### Cypress

```shell
yarn cypress
yarn cypress:open
```

### Webhint

-   develop and production url has to be set in package.json

```shell
yarn hint:local     (test localhost)
yarn hint:dev       (test develop url)
yarn hint:prod      (test production url)
```

## Deploying

How to build and publish on production

## Style guides
