/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ContactFormController($scope, $window, contactFormService) {
        var vm = this;

        vm.formDefinition = null;
        vm.formId = $scope.formId;
        vm.nonce = $window.nonce;
        vm.data = {};

        vm.submit = function () {
            contactFormService.submit(vm.formId, vm.nonce, vm.data);
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
