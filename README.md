# athlib [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]
> A library of functions, data and schema for Athletics (i.e. Track and Field)

## Installation

```sh
$ npm install --save athlib
```

## Usage

Please note that this library is a work in progress and the functionality will be extended and changed without notice until a stable version can be released.


```js
var athlib = require('athlib');
console.log(athlib.utils.normalizeGender('Male')) // == 'm'
```


### Testing

Mocha is used for unit testing. Run the following command to run all test and generate the lcov report
```js
$ npm test
```
or if you have mocha installed globally
```js
$ npm install --global mocha
$ mocha
```
### Linting

ESLint is used for code quality standards.

Install globally
```js
$ npm install -g eslint
```
then run
```js
$ eslint ./
```
## License

Apache-2.0 © [benjamintoomer](https://github.com/mullet1989)


[npm-image]: https://badge.fury.io/js/athlib.svg
[npm-url]: https://npmjs.org/package/athlib
[travis-image]: https://travis-ci.org/mullet1989/athlibjs.svg?branch=master
[travis-url]: https://travis-ci.org/mullet1989/athlibjs
[daviddm-image]: https://david-dm.org/mullet1989/athlibjs.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/mullet1989/athlibjs
