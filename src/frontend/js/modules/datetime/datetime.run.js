require('./datetime.service.js');
(function(angular) {
  'use strict';

  angular.module('esn.datetime')
    .run(run);

  function run(moment, esnDatetimeService, tmhDynamicLocale, esnConfig) {
    esnDatetimeService.init().then(function() {
      moment.tz.setDefault(esnDatetimeService.getTimeZone());
      esnConfig('core.language').then(function(config) {
        tmhDynamicLocale.set(config);
      });
    });
  }
})(angular);
