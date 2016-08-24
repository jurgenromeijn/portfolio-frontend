(function () {
    'use strict';

    angular
        .module('app.portfolio')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider, $locationProvider, $windowProvider, $uiViewScrollProvider) {
        var $window = $windowProvider.$get();

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'home.html'
            })
            .state('projects', {
                url: '/projecten',
                templateUrl: 'project-overview.html'
            })
            .state('projects-detail', {
                url: '/projecten/{slug}',
                controller: 'ProjectController',
                controllerAs: 'project',
                templateUrl: 'project-detail.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact.html'
            });

        if($window.history && $window.history.pushState){
            $locationProvider.html5Mode(true);
        }

        $uiViewScrollProvider.useAnchorScroll()
        $urlRouterProvider.otherwise('/');
    }

})();
