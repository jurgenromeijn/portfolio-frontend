(function() {
  'use strict';

  angular
    .module('app.portfolio')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log, $rootScope) {

    $rootScope.$on('$stateChangeSuccess', function() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });

    $log.debug('runBlock end');
  }

})();
