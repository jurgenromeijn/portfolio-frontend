/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    function ProjectService($http, $q, lodash, api) {
        var that = this;

        this._projects = null;

        this.getProjects = function () {
            return $q(function (resolve) {
                if (that._projects === null) {
                    $http.get(getProjectApiUrl()).then(function (response) {
                        that._projects = response.data;
                        resolve(response.data);
                    });
                } else {
                    resolve(that._projects);
                }
            });
        };

        this.getProject = function (slug) {
            return $q(function (resolve) {
                that.getProjects().then(function (projects) {
                    var project = lodash.find(projects, {'slug': slug});
                    resolve(project);
                });
            });
        };

        function getProjectApiUrl() {
            return [api.baseUrl, api.endpoints.projects].join('');
        }
    }

    angular.module('app.portfolio').service('projectService', ProjectService);
})();
