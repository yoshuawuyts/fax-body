# fax-body
[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]
[![Downloads][downloads-image]][downloads-url]

Parse response bodies with generators based on [co-body][co-body].

## Installation
```bash
npm install fax-body
```

## Usage
```js
// application/json
var body = yield parse(req);

// explicit limit, defaults to 1mb
var body = yield parse(req, {limit: '10kb'});
```

## Why?
[fax](https://github.com/yoshuawuyts/fax) has no notion of body parsing, so
by moving it out into a module there can be custom body parsers for any type
of content.

## See also
- [co-body][co-body]

## License
[MIT](https://tldrlegal.com/license/mit-license)

[npm-image]: https://img.shields.io/npm/v/fax-body.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fax-body
[travis-image]: https://img.shields.io/travis/yoshuawuyts/fax-body.svg?style=flat-square
[travis-url]: https://travis-ci.org/yoshuawuyts/fax-body
[coveralls-image]: https://img.shields.io/coveralls/yoshuawuyts/fax-body.svg?style=flat-square
[coveralls-url]: https://coveralls.io/r/yoshuawuyts/fax-body?branch=master
[downloads-image]: http://img.shields.io/npm/dm/fax-body.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/fax-body

[co-body]: https://github.com/tj/co-body
