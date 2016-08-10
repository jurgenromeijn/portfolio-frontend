/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ContactFormController(contactService) {
        var vm = this;

        vm.submit = function (formData) {
            contactService.submit(formData);
        };
    }

    angular.module('app.portfolio').controller('ContactFormController', ContactFormController);
})();
