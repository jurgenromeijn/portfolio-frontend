(function() {
  'use strict';

  angular
    .module('app.portfolio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {
    /* eslint-disable */
    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
    /* eslint-enable */

    $log.debug('runBlock end');
  }

})();
