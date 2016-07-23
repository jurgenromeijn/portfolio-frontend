(function () {
    'use strict';

    angular
        .module('app.portfolio')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider, $windowProvider) {
        var $window = $windowProvider.$get();
        
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/pages/home/home.html'
            })
            .state('projects', {
                url: '/projecten',
                templateUrl: 'app/pages/project/overview/project-overview.html'
            })
            .state('projects-detail', {
                url: '/projecten/{slug}',
                templateUrl: 'app/pages/project/detail/project-detail.html'
            });

        if($window.history && $window.history.pushState){
            $locationProvider.html5Mode(true);
        }

        $urlRouterProvider.otherwise('/');
    }

})();
