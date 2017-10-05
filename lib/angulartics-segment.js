(function(window, angular, undefined) {'use strict';

/**
 * @ngdoc overview
 * @name angulartics.segment
 * Enables analytics support for Segment (http://segment.com)
 */
angular.module('angulartics.segment', ['angulartics'])
.config(['$analyticsProvider', function ($analyticsProvider) {

  // This allows users to load their segment library async, queue events,
  // and send them whenever the script is ready
  angulartics.waitForVendorApi("analytics", 1000, "initialized", registerHandlers);

  function registerHandlers(){
    // https://segment.com/docs/libraries/analytics.js/#page
    // analytics.page([category], [name], [properties], [options], [callback]);
    // TODO : Support optional parameters where the parameter order and type changes their meaning
    // e.g.
    // (string) is (name)
    // (string, string) is (category, name)
    // (string, object) is (name, properties)
    $analyticsProvider.registerPageTrack(function (path, properties) {
      try {
        // only pass `path`, segment script will automatically populate properties
        analytics.page(path);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    });

    // https://segment.com/docs/libraries/analytics.js/#track
    // analytics.track(event, [properties], [options], [callback]);
    $analyticsProvider.registerEventTrack(function (event, properties, options, callback) {
      try {
        analytics.track(event, properties, options, callback);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    });

    // https://segment.com/docs/libraries/analytics.js/#identify
    // analytics.identify([userId], [traits], [options], [callback]);
    $analyticsProvider.registerSetUserProperties(function (userId, traits, options, callback) {
      try {
        analytics.identify(userId, traits, options, callback);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    });

    // https://segment.com/docs/libraries/analytics.js/#identify
    // analytics.identify([userId], [traits], [options], [callback]);
    $analyticsProvider.registerSetUserPropertiesOnce(function (userId, traits, options, callback) {
      try {
        analytics.identify(userId, traits, options, callback);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    });

    // https://segment.com/docs/libraries/analytics.js/#alias
    // analytics.alias(userId, previousId, options, callback);
    $analyticsProvider.registerSetAlias(function (userId, previousId, options, callback) {
      try {
        analytics.alias(userId, previousId, options, callback);
      } catch (e) {
        if (!(e instanceof ReferenceError)) {
          throw e;
        }
      }
    });
    $analyticsProvider.registerClearCookies(function() {
      try {
        analytics.reset();
      } catch (e) {
        if (!(e instanceof ReferenceError)) throw e
      }
    });
  }

}]);

})(window, window.angular);
