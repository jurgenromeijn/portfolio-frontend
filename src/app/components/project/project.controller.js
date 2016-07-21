/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';

    function ProjectController($stateParams, projectService) {
        this._projectService = projectService;

        this.project = null;

        this.findProject($stateParams.slug);
    }

    ProjectController.prototype.findProject = function (slug) {
        var that = this;
        this._projectService.findProject(slug).then(function (project) {
            that.project = project;
        });
    };

    angular.module('app.portfolio').controller('projectController', ProjectController);
})(window.angular);
