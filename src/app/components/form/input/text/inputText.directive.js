/**
 * Created on 11/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A directive to display a text field. Set rows to 2 or more to get a multi-line field.
     * @returns {{restrict: string, scope: {name: string, label: string, placeholder: string, value: string, rows: string}, templateUrl: string}}
     */
    function inputText() {
        return {
            restrict: 'A',
            scope: {
                name: '@inputText',
                label: '@',
                model: '=',
                placeholder: '@',
                rows: '@'
            },
            templateUrl: 'app/components/form/input/text/inputText.tpl.html'
        }
    }

    angular.module('app.portfolio').directive('inputText', inputText)
})();
