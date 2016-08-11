/**
 * Created on 11/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A directive to display an email field.
     * @returns {{restrict: string, scope: {name: string, label: string, placeholder: string, value: string}, templateUrl: string}}
     */
    function emailInput() {
        return {
            restrict: 'A',
            scope: {
                name: '@',
                label: '@',
                placeholder: '@',
                value: '@'
            },
            templateUrl: 'app/components/form/input/email/emailInput.tpl.html'
        }
    }

    angular.module('app.portfolio').directive('emailInput', emailInput)
})();
