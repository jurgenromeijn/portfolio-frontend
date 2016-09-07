/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * This controller is used to add a single project to the view model based on the stateparams.
     * @param $sce
     * @param project
     * @param pageService
     * @param title
     * @constructor
     */
    function ProjectController($sce, project, pageService, title) {
        var vm = this;

        vm.title = project.title;
        vm.intro = $sce.trustAsHtml(project.intro);
        vm.content = $sce.trustAsHtml(project.content);
        vm.info = $sce.trustAsHtml(project.info);
        vm.featuredImage = project.featuredImage;
        vm.images = project.images;

        pageService.setTitle([project.title, title.project].join(''));
    }

    angular.module('app.portfolio').controller('ProjectController', ProjectController);
})();
