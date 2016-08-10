/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A service used for sending contact data.
     * @param $http
     * @param api
     * @constructor
     */
    function ContactService($http, api) {
        var that = this;

        /**
         * Submit the contact data.
         * @param data
         * @returns {Promise}
         */
        this.submit = function (data) {
            return $http.post(geContactApiUrl(), data);
        };

        /**
         * Get the url of the contact api.
         * @returns {string}
         */
        function geContactApiUrl() {
            return [api.baseUrl, api.endpoints.contact].join('');
        }
    }

    angular.module('app.portfolio').service('contactService', ContactService);
})();
