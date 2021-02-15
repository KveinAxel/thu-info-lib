# thu-info-lib

[![Build Status](https://github.com/thu-info-community/thu-info-lib/workflows/Test%20and%20Publish/badge.svg)](https://github.com/thu-info-community/thu-info-lib/actions?query=workflow%3A%22Test+and+Publish%22)
[![NPM Version](https://img.shields.io/npm/v/thu-info-lib)](https://www.npmjs.com/package/thu-info-lib)

This is a JavaScript library aimed to provide a program-friendly interface to Tsinghua web portal, and is licensed under MIT License.

## Installation

```shell
yarn add thu-info-lib
```

## Usage

See [wiki](https://github.com/thu-info-community/thu-info-lib/wiki).

## Playground

### Before you start

It is recommended that you have `Yarn` installed.

```shell
npm install -g yarn  # Skip this step if you have already used yarn before.
```

After that, install the dependencies that this project requires.

```shell
yarn install
```

Go on to the corresponding section depending on the JS environment you will be using.

**Note that due to various reasons, some operations might fail from time to time. Retrying might solve the problem.**

### Browsers

Run the following command.

```shell
yarn build-dist
```

You will find a bundled `index.js` generated in directory `demo/`.

Install `demo/` as an unpacked extension in Chrome.

> Note: you should have developer-mode enabled in Chrome.

Click on the installed extension `thu-info-lib-test` and you will see a blank page.

After that, you can open the console of Chrome Developer Tool and execute anything you want in it. The helper class is attached as `window.InfoHelper`.

Here is a typical example of what you will execute in the browser console.

```javascript
helper = new InfoHelper.InfoHelper()
helper.login({userId: "", password: "", dormPassword:""})
```

### Node.js

Run the following command.

```shell
yarn build
```

You can find the build output in directory `dist/`.

After that, run command

```shell
yarn demo
```

This will execute script `demo.js` at the root directory.

You can modify `demo.js` to perform more requests.

You can also run command

```shell
yarn play
```

to start an interactive JS environment (Node REPL).

A typical example of what you will execute will be

```javascript
import {InfoHelper} from "./dist";
const helper = new InfoHelper();
await helper.login({userId: "", password: "", dormPassword:""});
```

### React Native

See [THUInfo APP](https://github.com/UNIDY2002/THUInfo) for an example.

## Testing

Run `yarn test` for testing. It requires your personal credential since we don't have mocks for these APIs. To do this, you must create a `secrets.json`  under the root folder, with `userId`, `password`, `dormPassword` and `emailName` as keys.

It's ok if you meet `Timeout * Async callback was not invoked within the xxx-ms timeout...` error when running tests. Adjusting the third argument timeout of the failing testcase `it("xxx", async () => void, timeout)` might solve the problem.

Due to various reasons, some test cases might fail. Re-running them might solve the problem.

## Changelog

- v1.0.0
  - First release

## Acknowledgement

Great thanks to [Harry-Chen](https://github.com/Harry-Chen) and his [thu-learn-lib](https://github.com/Harry-Chen/thu-learn-lib)!
