/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function contactForm() {
        return {
            restrict: 'A',
        }
    }

    angular.module('app.portfolio').directive('contactForm', contactForm);
})();
