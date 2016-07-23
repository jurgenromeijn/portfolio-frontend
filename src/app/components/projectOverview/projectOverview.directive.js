/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function projectOverview() {
        return {
            restrict: 'A',
            templateUrl: 'app/components/projectOverview/projectOverview.tpl.html',
            controller: 'ProjectOverviewController',
            controllerAs: 'controller'
        }
    }

    angular.module('app.portfolio').directive('projectOverview', projectOverview);
})();
