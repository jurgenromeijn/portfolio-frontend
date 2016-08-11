/**
 * Created on 11/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function textInput() {
        return {
            restrict: 'A',
            scope: {
                class: '@',
                name: '@',
                label: '@',
                placeholder: '@',
                value: '@',
                rows: '@'
            },
            templateUrl: 'app/components/form/input/text/textInput.tpl.html'
        }
    }

    angular.module('app.portfolio').directive('textInput', textInput)
})();
