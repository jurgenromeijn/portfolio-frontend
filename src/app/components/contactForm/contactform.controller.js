/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ContactFormController($scope, contactFormService) {
        var vm = this;

        vm.formDefinition = null;
        vm.formId = $scope.formId;
        vm.nonce = $scope.nonce;
        vm.data = {};

        vm.submit = function () {
            contactFormService.submit(vm.data);
        };

        function getFormDefinition(id) {
            contactFormService.getFormDefinition(id).then(function (formDefinition) {
                vm.formDefinition = formDefinition;
            });
        }

        getFormDefinition(vm.formId);
    }

    angular.module('app.portfolio').controller('ContactFormController', ContactFormController);
})();
