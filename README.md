# Prerequisites

After cloning repository, you need to install these dependencies:
- NPM
- Playwright
- [dotenv](https://www.npmjs.com/package/dotenv)
- [eslint](https://www.npmjs.com/package/eslint)
- [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier/v/4.0.0)
- globals
- [prettier](https://www.npmjs.com/package/prettier)
- [oracleDB] (https://www.npmjs.com/package/oracledb)

If you dont have the extensions already installed in VScode, you will need these for cucumber to work:
- Cucumber (Gherkin) Full Support -> Alexander Krechik
- Cuke Step Definition Generator -> Muralidharan Rajendran

## Initialize The Project & install Playwright at the same time

Once you open your framework, initialize it as a node.js project & install playwright at the same time by doing the following command:

```bash
npm init playwright @latest
```

This will initialize your project with NPM as well as the latest version of playwright.

## Playwright initial settings when installing

Playwright will ask you a set of questions before installing within the CLI. For this project, these are the settings that you must set:

- Do you want to use TypeScript or JavaScript? -> TypeScript
- Where to put your end-to-end tests? -> tests
- Add a GitHub Actions workflow? -> Yes
- Install Playwright browsers (can be done manually via 'npx playwright install')? -> Yes

## Install the dotenv dependency
This is used to protect sensitive or environment-specific data

Advantage: Secure and flexible test configurations
```
npm install dotenv -D
```
## Install Prettier

```bash

```

## Install eslint-config-prettier

```bash

```

## Install eslint-plugin-prettier

```bash

```

## Install oracleDB

```bash
npm i oracledb -D
```

oracleDB wont understand your test because you are using typescript. to fix this, you need to install this package: 

```bash
npm i --save-dev @types/oracledb
```
