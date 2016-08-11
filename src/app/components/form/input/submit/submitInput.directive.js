/**
 * Created on 11/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A directive to display a submit button.
     * @returns {{restrict: string, scope: {value: string}, templateUrl: string}}
     */
    function submitInput() {
        return {
            restrict: 'A',
            scope: {
                value: '@'
            },
            templateUrl: 'app/components/form/input/submit/submitInput.tpl.html'
        }
    }

    angular.module('app.portfolio').directive('submitInput', submitInput)
})();
