/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ContactFormController($scope, contactFormService) {
        var vm = this;

        vm.submit = function (formData) {
            contactFormService.submit(formData);
        };
    }

    angular.module('app.portfolio').controller('ContactFormController', ContactFormController);
})();
