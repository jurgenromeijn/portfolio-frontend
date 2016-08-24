/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A service that contains all functionality to fetch projects from the project api.
     * @param $http
     * @param $q
     * @param lodash
     * @param api
     * @constructor
     */
    function ProjectService($http, $q, lodash, api) {
        var that = this;
        var projects = null;

        /**
         * Get all projects.
         * @returns {Promise}
         */
        this.getProjects = function () {
            return $q(function (resolve) {
                if (projects === null) {
                    $http.get(getProjectApiUrl()).then(function (response) {
                        projects = response.data;
                        resolve(response.data);
                    });
                } else {
                    resolve(projects);
                }
            });
        };

        /**
         * Get a single project with a certain slug.
         * @param {string} slug
         * @returns {Promise}
         */
        this.getProject = function (slug) {
            return $q(function (resolve) {
                that.getProjects().then(function (projects) {
                    var project = lodash.find(projects, {'slug': slug});
                    resolve(project);
                });
            });
        };

        /**
         * Return the url of the project api.
         * @returns {string}
         */
        function getProjectApiUrl() {
            return api.projects;
        }
    }

    angular.module('app.portfolio').service('projectService', ProjectService);
})();
