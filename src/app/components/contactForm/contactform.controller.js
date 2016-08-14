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

        vm.formDefinition = null;
        vm.data = {};

        vm.submit = function () {
            contactFormService.submit(formId, nonce, vm.data);
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
