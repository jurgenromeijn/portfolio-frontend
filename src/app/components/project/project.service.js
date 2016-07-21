/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function (angular) {
    'use strict';

    function ProjectService($http, $q) {
        this._$http = $http;
        this._$q = $q;

        this._projects = null;
    }

    ProjectService.prototype.getProjects = function () {
        var that = this,
            projectDefer = this._$q.defer();

        if (this._projects === null) {
            this._$http.get('http://localhost:8000/wp-json/projects/v1/project').then(function (response) {
                that._projects = response.data;
                projectDefer.resolve(response.data);
            });
        } else {
            projectDefer.resolve(this._projects);
        }

        return projectDefer.promise;
    };

    angular.module('app.portfolio').service('projectService', ProjectService);
})(window.angular);
