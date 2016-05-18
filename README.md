# canonical

[![CircleCI](https://circleci.com/gh/segmentio/canonical.svg?style=shield&circle-token=bc7f4068e87cdf8f0f6c09da85701890a72cd735)](https://circleci.com/gh/segmentio/canonical)
[![Codecov](https://img.shields.io/codecov/c/github/segmentio/canonical/master.svg?maxAge=2592000)](https://codecov.io/gh/segmentio/canonical)

Returns the canonical URL for the page.

## Installation

```js
$ npm install @segment/canonical
```

## Example

```html
<html>
<head>
  <link rel="canonical" href="http://example.com" />
</head>
</html>
```

```js
var canonical = require('canonical');
canonical(); // http://example.com
```
