/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';

    function ProjectService($http, $q, lodash) {
        this._$http = $http;
        this._$q = $q;
        this._lodash = lodash;

        this._projects = null;
    }

    ProjectService.prototype.getProjects = function () {
        var that = this,
            projectsDefer = this._$q.defer();

        if (this._projects === null) {
            this._$http.get('http://localhost:8000/wp-json/projects/v1/project').then(function (response) {
                that._projects = response.data;
                projectsDefer.resolve(response.data);
            });
        } else {
            projectsDefer.resolve(this._projects);
        }

        return projectsDefer.promise;
    };

    ProjectService.prototype.getProject = function (slug) {
        var that = this,
            projectDefer = this._$q.defer();

        this.getProjects().then(function (projects) {
            var project = that._lodash.find(projects, {'slug': slug})[0];
            projectDefer.resolve(project);
        });

        return projectDefer.promise;
    };

    angular.module('app.portfolio').service('projectService', ProjectService);
})(window.angular);
