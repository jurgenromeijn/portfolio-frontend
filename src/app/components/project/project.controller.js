/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';

    function ProjectController($stateParams, $sce, projectService) {
        this._projectService = projectService;
        this._$sce = $sce;

        this.title = "";
        this.content = "";

        this.getProject($stateParams.slug);
    }

    ProjectController.prototype.getProject = function (slug) {
        var that = this;
        this._projectService.getProject(slug).then(function (project) {
            that.title = project.title;
            that.content = that._$sce.trustAsHtml(project.content);
        });
    };

    angular.module('app.portfolio').controller('projectController', ProjectController);
})(window.angular);
