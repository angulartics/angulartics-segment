## angulartics-segment

[![NPM version][npm-image]][npm-url] [![NPM downloads][npm-downloads-image]][npm-downloads-url] [![Bower version][bower-image]][bower-url] [![Dependencies status][dep-status-image]][dep-status-url] [![MIT license][license-image]][license-url] [![Join the Slack chat][slack-image]][slack-url]

[Segment](https://segment.com/) plugin for [Angulartics](http://github.com/luisfarzati/angulartics).

## Important Note
This plugin has no maintainers at the moment. If you use Segment and want to contribute with code/documentation/examples and become an active maintainer of this project, please [let us know](https://github.com/angulartics/angulartics-segment/issues/new?title=I+want+to+join+as+maintainer).

## Install

First make sure you've read installation and setup instructions for [Angulartics](https://github.com/luisfarzati/angulartics#install).

Then you can install this package either with `npm` or with `bower`.

### npm

```shell
npm install angulartics-segment
```

Then add `angulartics.segment` as a dependency for your app:

```javascript
require('angulartics')

angular.module('myApp', [
  'angulartics',
  require('angulartics-segment')
]);
```

> Please note that core Angulartics doesn't export the name yet, but it will once we move it into [the new organization](http://github.com/angulartics).

### bower

```shell
bower install angulartics-segment
```

Add the `<script>` to your `index.html`:

```html
<script src="/bower_components/angulartics-segment/dist/angulartics-segment.min.js"></script>
```

Then add `angulartics.segment` as a dependency for your app:

```javascript
angular.module('myApp', [
  'angulartics',
  'angulartics.segment'
]);
```

## Documentation

Documentation is available on the [Angulartics site](http://luisfarzati.github.io/angulartics).

## Development

```shell
npm run build
```

## License

[MIT](LICENSE)

[npm-image]: https://img.shields.io/npm/v/angulartics-segment.svg
[npm-url]: https://npmjs.org/package/angulartics-segment
[npm-downloads-image]: https://img.shields.io/npm/dm/angulartics-segment.svg
[npm-downloads-url]: https://npmjs.org/package/angulartics-segment
[bower-image]: https://img.shields.io/bower/v/angulartics-segment.svg
[bower-url]: http://bower.io/search/?q=angulartics-segment
[dep-status-image]: https://img.shields.io/david/angulartics/angulartics-segment.svg
[dep-status-url]: https://david-dm.org/angulartics/angulartics-segment
[license-image]: http://img.shields.io/badge/license-MIT-blue.svg
[license-url]: LICENSE
[slack-image]: https://angulartics.herokuapp.com/badge.svg
[slack-url]: https://angulartics.herokuapp.com
