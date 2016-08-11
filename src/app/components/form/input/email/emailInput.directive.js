/**
 * Created on 11/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function emailInput() {
        return {
            restrict: 'A',
            scope: {
                class: '@',
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
