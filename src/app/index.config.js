(function() {
  'use strict';

  angular
    .module('app.portfolio')
    .config(config);

  /** @ngInject */
  function config($logProvider) {
    // Enable log
    $logProvider.debugEnabled(true);
  }

})();
