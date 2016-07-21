/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';
    
    function ProjectOverviewController(projectService) {
        this._projectService = projectService;

        this.projects = this._getProjects();
    }

    ProjectOverviewController.prototype._getProjects = function () {
        return this._projectService.getProjects();
    };

    angular.module('app.portfolio').controller('projectOverviewController', ProjectOverviewController);
})(window.angular);
