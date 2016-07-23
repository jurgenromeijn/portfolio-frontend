/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * This controller is used to add all projects to the view model.
     * @param projectService
     * @constructor
     */
    function ProjectOverviewController(projectService) {
        var vm = this;

        vm.projects = [];

        /**
         * Get all projects.
         */
        function getProjects() {
            projectService.getProjects().then(function (projects) {
                vm.projects = projects;
            });
        }
        
        getProjects();
    }

    angular.module('app.portfolio').controller('ProjectOverviewController', ProjectOverviewController);
})();
