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
                templateUrl: 'home.tpl.html'
            })
            .state('projects', {
                url: '/projecten',
                templateUrl: 'project-overview.tpl.html'
            })
            .state('projects-detail', {
                url: '/projecten/{slug}',
                controller: 'ProjectController',
                controllerAs: 'project',
                templateUrl: 'project-detail.tpl.html'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'about.tpl.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'contact.tpl.html'
            });

        if($window.history && $window.history.pushState){
            $locationProvider.html5Mode(true);
        }

        $uiViewScrollProvider.useAnchorScroll()
        $urlRouterProvider.otherwise('/');
    }

})();
