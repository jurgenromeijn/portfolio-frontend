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

        vm.title = '';
        vm.intro = '';
        vm.content = '';
        vm.info = '';
        vm.featuredImage = {};
        vm.images = [];

        /**
         * Get a project for a slug.
         * @param slug
         */
        function getProject(slug) {
            projectService.getProject(slug).then(function (project) {
                vm.title = project.title;
                vm.intro = $sce.trustAsHtml(project.intro);
                vm.content = $sce.trustAsHtml(project.content);
                vm.info = $sce.trustAsHtml(project.info);
                vm.featuredImage = project.featuredImage;
                vm.images = project.images;
            });
        }
        
        getProject($stateParams.slug);
    }

    angular.module('app.portfolio').controller('ProjectController', ProjectController);
})();
