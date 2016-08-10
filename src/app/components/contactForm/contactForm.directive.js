/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function contactForm() {
        return {
            restrict: 'A',
            controller: 'ContactFormController',
            controllerAs: 'contactForm'
        }
    }

    angular.module('app.portfolio').directive('contactForm', contactForm);
})();
