(function () {
    'use strict';

    /**
     * Set up all routing.
     * @param $stateProvider
     * @param $urlRouterProvider
     * @param $locationProvider
     * @param $windowProvider
     * @param $uiViewScrollProvider
     */
    function routerConfig($stateProvider,
                          $urlRouterProvider,
                          $locationProvider,
                          $windowProvider,
                          $uiViewScrollProvider) {
        var $window = $windowProvider.$get();

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'page-home.tpl.html'
            })
            .state('projects', {
                url: '/projecten',
                templateUrl: 'page-project-overview.tpl.html'
            })
            .state('projects-detail', {
                url: '/projecten/{slug}',
                controller: 'ProjectController',
                controllerAs: 'project',
                templateUrl: 'page-project-detail.tpl.html',
                resolve: {
                    project: function ($stateParams, projectService) {
                        return projectService.getProject($stateParams.slug)
                    }
                }
            })
            .state('about', {
                url: '/about',
                templateUrl: 'page-about.tpl.html'
            })
            .state('contact', {
                url: '/contact',
                templateUrl: 'page-contact.tpl.html'
            });

        if($window.history && $window.history.pushState){
            $locationProvider.html5Mode(true);
        }

        $uiViewScrollProvider.useAnchorScroll()
        $urlRouterProvider.otherwise('/');
    }

    angular
        .module('app.portfolio')
        .config(routerConfig);
})();
