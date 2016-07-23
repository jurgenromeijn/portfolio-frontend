/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ProjectController($stateParams, $sce, projectService) {
        var vm = this;

        vm._projectService = projectService;
        vm._$sce = $sce;

        vm.title = "";
        vm.content = "";

        vm.getProject($stateParams.slug);
    }

    ProjectController.prototype.getProject = function (slug) {
        var vm = this;
        vm._projectService.getProject(slug).then(function (project) {
            vm.title = project.title;
            vm.content = vm._$sce.trustAsHtml(project.content);
        });
    };

    angular.module('app.portfolio').controller('projectController', ProjectController);
})();
