/**
 * Created on 15/06/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * Show the header of the page.
     * @returns {{restrict: string, templateUrl: string, controller: string, controllerAs: string}}
     */
    function pageHeader() {
        return {
            restrict: 'A',
            templateUrl: 'app/components/pageHeader/pageHeader.tpl.html',
            controller: 'PageHeaderController',
            controllerAs: 'header'
        };
    }

    angular.module('app.portfolio').directive('pageHeader', pageHeader);
})();
