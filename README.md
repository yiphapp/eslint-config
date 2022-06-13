# yiph eslint config

This repository contains the eslint config that is used across different yiph projects. It includes eslint rules for TypeScript, React, and React Native.

## Installation

The package needs the following peer dependencies:

- eslint `>= 8`
- prettier `>= 2`
- eslint-plugin-import `^2.26.0`
- eslint-plugin-prettier `^4.0.0`
- eslint-plugin-react `^7.30.0`
- eslint-plugin-react-hooks `^4.5.0`
- eslint-plugin-react-native `^4.0.0`
- eslint-plugin-unused-imports `^2.0.0`
- @typescript-eslint/eslint-plugin `^5.27.1`

You can install all the required peer dependencies when installing this package with

```
npx install-peerdeps --dev @yiphapp/eslint-config
```

That command will update the `package.json`. If using yarn that command will detect `yarn.lock` and update that accordingly.

This package has the following dependencies. They are installed when you install the package:

- @typescript-eslint/parser `^5.27.1`
- eslint-config-prettier `^8.5.0`

## Usage

Example eslint configs

### Base (TypeScript)

```json
{
  "extends": "@yiphapp/eslint-config"
}
```

### React

```json
{
  "extends": "@yiphapp/eslint-config/react"
}
```

### React Native

```json
{
  "extends": "@yiphapp/eslint-config/react-native"
}
```
