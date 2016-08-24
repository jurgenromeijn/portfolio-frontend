(function() {
  'use strict';

  angular
    .module('app.portfolio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
