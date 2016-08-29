/**
 * Created on 16/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * Set up the page header.
     * @constructor
     */
    function PageHeaderController() {
        var vm = this;

        vm.isNavbarCollapsed = true;
    }

    angular.module('app.portfolio').controller('PageHeaderController', PageHeaderController);
})();
