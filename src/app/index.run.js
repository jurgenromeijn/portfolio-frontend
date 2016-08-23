(function() {
  'use strict';

  angular
    .module('app.portfolio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
    $log.debug('runBlock end');
  }

})();
