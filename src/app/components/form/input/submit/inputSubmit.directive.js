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
    function inputSubmit() {
        return {
            restrict: 'A',
            scope: {
                text: '@inputSubmit'
            },
            templateUrl: 'app/components/form/input/submit/inputSubmit.tpl.html'
        }
    }

    angular.module('app.portfolio').directive('inputSubmit', inputSubmit)
})();
