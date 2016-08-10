/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ContactFormController() {
        var vm = this;

        vm.submit = function (formData) {
            alert('send');
        };
    }

    angular.module('app.portfolio').controller('ContactFormController', ContactFormController);
})();
