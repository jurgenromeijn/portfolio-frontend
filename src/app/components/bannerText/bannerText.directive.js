/**
 * Created on 16/06/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    angular
        .module('app.portfolio')
        .directive('bannerText', bannerText);

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
})();
