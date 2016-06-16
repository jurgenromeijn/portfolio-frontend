/**
 * Created on 15/06/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    angular
        .module('portfolio')
        .directive('pageHeader', pageHeader);

    function pageHeader() {
        return {
            templateUrl: 'app/components/pageHeader/pageHeader.tpl.html'
        };
    }
})();
