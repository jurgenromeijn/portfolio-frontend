/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';
    
    function ProjectOverviewController() {
        this.projects = this._getProjects();
    }

    ProjectOverviewController.prototype._getProjects = function () {
        // get all the projects.
    };

    angular.module('app.portfolio').controller('ProjectOverviewController', ProjectOverviewController);
})(window.angular);
