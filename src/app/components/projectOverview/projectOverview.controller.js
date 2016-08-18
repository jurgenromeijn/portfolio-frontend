/**
 * Created on 21/07/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * This controller is used to add all projects to the view model.
     * @param $scope
     * @param $state
     * @param projectService
     * @constructor
     */
    function ProjectOverviewController($scope, $state, projectService) {
        var vm = this;

        vm.projects = [];
        vm.limit = $scope.limit;
        vm.colWidthLg = 6;
        vm.colWidthMd = 6;
        vm.colWidthSm = 6;
        vm.colWidthXs = 12;
        vm.moreLink = null;
        vm.moreLinkText = '';

        /**
         * Fetch all projects.
         */
        function fetchProjects() {
            projectService.getProjects().then(function (projects) {
                vm.projects = projects;
                setMoreLink();
            });
        }

        /**
         * Set all the column widths for the projects.
         */
        function setCollWidths() {
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

        /**
         * Calculate the width of the column based on the ammount of projects per row.
         * @param cols
         * @returns {number}
         */
        function calculateColWidth(cols) {
            return Math.ceil(12 / cols);
        }

        /**
         * Set the attributes related to the more projects link.
         */
        function setMoreLink() {
            if (angular.isDefined($scope.moreLink)
                && angular.isDefined($scope.moreLinkText)
                && vm.limit < vm.projects.length) {
                vm.limit--;
                vm.moreLink = $state.href($scope.moreLink);
                vm.moreLinkText = $scope.moreLinkText;
            }
        }
        
        fetchProjects();
        setCollWidths();
    }

    angular.module('app.portfolio').controller('ProjectOverviewController', ProjectOverviewController);
})();
