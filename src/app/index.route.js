(function () {
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
            })
            .state('projects', {
                url: '/projecten',
                templateUrl: 'app/pages/project/overview/project-overview.html'
            })

        $urlRouterProvider.otherwise('/');
    }

})();
