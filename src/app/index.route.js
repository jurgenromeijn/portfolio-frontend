(function() {
  'use strict';

  angular
    .module('app.portfolio')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/pages/home/home.html'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
