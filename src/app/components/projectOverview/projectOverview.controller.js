/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';
    
    function ProjectOverviewController(projectService) {
        var vm = this;

        vm.projects = [];

        function getProjects() {
            projectService.getProjects().then(function (projects) {
                vm.projects = projects;
            });
        }
        
        getProjects();
    }

    angular.module('app.portfolio').controller('ProjectOverviewController', ProjectOverviewController);
})();
