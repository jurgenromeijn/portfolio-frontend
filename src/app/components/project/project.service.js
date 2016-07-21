/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';

    function ProjectService($http, $q, lodash, api) {
        this._$http = $http;
        this._$q = $q;
        this._lodash = lodash;
        this._api = api;

        this._projects = null;
    }

    ProjectService.prototype.getProjects = function () {
        var that = this,
            projectsDefer = this._$q.defer();

        if (this._projects === null) {
            this._$http.get(this._getProjectApiUrl()).then(function (response) {
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
            var project = that._lodash.find(projects, {'slug': slug});
            projectDefer.resolve(project);
        });

        return projectDefer.promise;
    };

    ProjectService.prototype._getProjectApiUrl = function () {
        return [this._api.baseUrl, this._api.endpoints.projects].join('');
    };

    angular.module('app.portfolio').service('projectService', ProjectService);
})(window.angular);
