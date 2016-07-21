/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';

    function ProjectService($http) {
        this._$http = $http;

        this._projects = null;
    }

    ProjectService.prototype.getProjects = function () {
        if (this._projects === null) {
            this._loadProjects();
        }
        return this._projects;
    };

    ProjectService.prototype._loadProjects = function () {
        var that = this;
        this._$http({
            method: 'GET',
            url: 'http://localhost:8000/wp-json/projects/v1/project'
        }).then(function (response) {
            that._projects = response.data;
        });
    };
    
    angular.module('app.portfolio').service('projectService', ProjectService);
})(window.angular);
