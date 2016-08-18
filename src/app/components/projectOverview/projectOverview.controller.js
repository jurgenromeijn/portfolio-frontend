/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * This controller is used to add all projects to the view model.
     * @param $scope
     * @param projectService
     * @constructor
     */
    function ProjectOverviewController($scope, projectService) {
        var vm = this;

        vm.projects = [];
        vm.limit = $scope.limit;
        vm.colWidthLg = 6;
        vm.colWidthMd = 6;
        vm.colWidthSm = 6;
        vm.colWidthXs = 12;

        /**
         * Get all projects.
         */
        function getProjects() {
            projectService.getProjects().then(function (projects) {
                vm.projects = projects;
            });
        }

        function getCollWidths() {
            if (angular.isDefined($scope.colsLg)) {
                vm.colWidthLg = calculateColWidth($scope.colsLg);
            }
            if (angular.isDefined($scope.colsMd)) {
                vm.colWidthMd = calculateColWidth($scope.colsMd);
            }
            if (angular.isDefined($scope.colsSm)) {
                vm.colWidthSm = calculateColWidth($scope.colsSm);
            }
            if (angular.isDefined($scope.colsXs)) {
                vm.colWidthXs = calculateColWidth($scope.colsXs);
            }
        }

        function calculateColWidth(cols) {
            return Math.ceil(12 / cols);
        }
        
        getProjects();
        getCollWidths();
    }

    angular.module('app.portfolio').controller('ProjectOverviewController', ProjectOverviewController);
})();
