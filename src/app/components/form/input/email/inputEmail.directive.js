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
    function inputEmail() {
        return {
            restrict: 'A',
            scope: {
                name: '@inputEmail',
                label: '@',
                model: '=',
                placeholder: '@'
            },
            templateUrl: 'app/components/form/input/email/inputEmail.tpl.html'
        }
    }

    angular.module('app.portfolio').directive('inputEmail', inputEmail)
})();
