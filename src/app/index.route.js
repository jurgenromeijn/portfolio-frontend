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
                templateUrl: 'app/pages/home/home.tpl.html'
            })
            .state('projects', {
                url: '/projecten',
                templateUrl: 'app/pages/project/overview/projectOverview.tpl.html'
            })
            .state('projects-detail', {
                url: '/projecten/{slug}',
                templateUrl: 'app/pages/project/detail/projectDetail.tpl.html'
            });

        if($window.history && $window.history.pushState){
            $locationProvider.html5Mode(true);
        }

        $urlRouterProvider.otherwise('/');
    }

})();
