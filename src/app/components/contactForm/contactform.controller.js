/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A controller for contact forms.
     * @param $scope
     * @param $window
     * @param contactFormService
     * @constructor
     */
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

        /**
         * Submit the contact form
         */
        vm.submit = function () {
            contactFormService.submit(formId, nonce, vm.data).then(function (response) {
                vm.isSubmitted = true;
                vm.isSuccessful = response.success;
                if (vm.isSuccessful) {
                    vm.succesMessage = response.completion_message;
                }
            });
        };

        /**
         * Get the form definition of the contact form
         * @param id
         */
        function getFormDefinition(id) {
            contactFormService.getFormDefinition(id).then(function (formDefinition) {
                vm.formDefinition = formDefinition;
            });
        }

        getFormDefinition(formId);
    }

    angular.module('app.portfolio').controller('ContactFormController', ContactFormController);
})();
