/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ContactFormController($scope, $window, contactFormService) {
        var vm = this;
        var formId = $scope.formId;
        var nonce = $window.nonce;

        vm.isSubmitted = false;
        vm.isSuccessful = false;
        vm.errorMessage = $scope.errorMessage;
        vm.succesMessage = '';
        vm.formDefinition = null;
        vm.data = {};

        vm.submit = function () {
            contactFormService.submit(formId, nonce, vm.data).then(function (response) {
                vm.isSubmitted = true;
                vm.isSuccessful = response.success;
                if (vm.isSuccessful) {
                    vm.succesMessage = response.completion_message;
                }
            });
        };

        function getFormDefinition(id) {
            contactFormService.getFormDefinition(id).then(function (formDefinition) {
                vm.formDefinition = formDefinition;
            });
        }

        getFormDefinition(formId);
    }

    angular.module('app.portfolio').controller('ContactFormController', ContactFormController);
})();
