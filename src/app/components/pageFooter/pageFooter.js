/**
 * Created on 17/06/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    angular
        .module('app.portfolio')
        .directive('pageFooter', pageFooter)
    
    function pageFooter() {
        return {
            restrict: 'A',
            templateUrl: 'app/components/pageFooter/pageFooter.tpl.html'
        }
    }
})();
