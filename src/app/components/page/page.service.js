/**
 * Created on 07/09/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A service that contains all logic regarding the page itself
     * @param $rootScope
     */
    function pageService($rootScope) {
        /**
         * Set the title of the page.
         * @param title
         */
         this.setTitle = function (title) {
             $rootScope.title = title;
         };
    }

    angular.module('app.portfolio').service('pageService', pageService);
})();
