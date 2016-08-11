/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ContactFormController($scope, contactFormService) {
        var vm = this;

        vm.formDefinition = null;

        vm.submit = function (formData) {
            contactFormService.submit(formData);
        };

        function getFormDefinition(id) {
            contactFormService.getFormDefinition(id).then(function (formDefinition) {
                vm.formDefinition = formDefinition;
            });
        }

        getFormDefinition($scope.id);
    }

    angular.module('app.portfolio').controller('ContactFormController', ContactFormController);
})();
