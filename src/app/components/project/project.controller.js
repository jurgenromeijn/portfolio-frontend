/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * This controller is used to add a single project to the view model based on the stateparams.
     * @param $stateParams
     * @param $sce
     * @param projectService
     * @constructor
     */
    function ProjectController($stateParams, $sce, projectService) {
        var vm = this;

        vm.title = "";
        vm.content = "";

        /**
         * Get a project for a slug.
         * @param slug
         */
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
