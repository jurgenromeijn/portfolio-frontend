/**
 * Created on 17/06/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * Show the footer of the page.
     * @returns {{restrict: string, templateUrl: string}}
     */
    function pageFooter() {
        return {
            restrict: 'A',
            templateUrl: 'app/components/pageFooter/pageFooter.tpl.html'
        }
    }
    angular.module('app.portfolio').directive('pageFooter', pageFooter)
})();
