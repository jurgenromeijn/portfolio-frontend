/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ProjectController($stateParams, $sce, projectService) {
        var vm = this;

        vm.title = "";
        vm.content = "";

        function getProject(slug) {
            projectService.getProject(slug).then(function (project) {
                vm.title = project.title;
                vm.content = $sce.trustAsHtml(project.content);
            });
        }

        getProject($stateParams.slug);
    }

    angular.module('app.portfolio').controller('ProjectController', ProjectController);
})();
