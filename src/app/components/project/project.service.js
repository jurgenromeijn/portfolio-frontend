/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ProjectService($http, $q, lodash, api) {
        this._projects = null;

        this.getProjects = function () {
            var that = this,
                projectsDefer = $q.defer();

            if (this._projects === null) {
                $http.get(getProjectApiUrl()).then(function (response) {
                    that._projects = response.data;
                    projectsDefer.resolve(response.data);
                });
            } else {
                projectsDefer.resolve(this._projects);
            }

            return projectsDefer.promise;
        };

        this.getProject = function (slug) {
            var projectDefer = $q.defer();

            this.getProjects().then(function (projects) {
                var project = lodash.find(projects, {'slug': slug});
                projectDefer.resolve(project);
            });

            return projectDefer.promise;
        };

        function getProjectApiUrl() {
            return [api.baseUrl, api.endpoints.projects].join('');
        }
    }

    angular.module('app.portfolio').service('projectService', ProjectService);
})();
