/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * Show an overview of projects.
     * @returns {{restrict: string, templateUrl: string, controller: string, controllerAs: string}}
     */
    function projectOverview() {
        return {
            restrict: 'A',
            scope: {
                limit: '@'
            },
            templateUrl: 'app/components/projectOverview/projectOverview.tpl.html',
            controller: 'ProjectOverviewController',
            controllerAs: 'controller'
        }
    }

    angular.module('app.portfolio').directive('projectOverview', projectOverview);
})();
