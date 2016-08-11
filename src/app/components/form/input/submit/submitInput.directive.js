/**
 * Created on 11/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function submitInput() {
        return {
            restrict: 'A',
            scope: {
                class: '@',
                value: '@'
            },
            templateUrl: 'app/components/form/input/submit/submitInput.tpl.html'
        }
    }

    angular.module('app.portfolio').directive('submitInput', submitInput)
})();
