/**
 * Created on 16/06/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * Show a banner with text.
     * @returns {{restrict: string, transclude: boolean, scope: {image: string}, templateUrl: string}}
     */
    function bannerText() {
        return {
            restrict: 'A',
            transclude: true,
            scope: {
                image: '@'
            },
            templateUrl: 'app/components/bannerText/bannerText.tpl.html'
        };
    }
    angular.module('app.portfolio').directive('bannerText', bannerText);
})();
