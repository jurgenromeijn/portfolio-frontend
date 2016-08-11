/**
 * Created on 10/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A service used for sending a contact form.
     * @param $http
     * @param $q
     * @param api
     * @constructor
     */
    function ContactFormService($http, $q, api) {
        var formDefinitions = [];

        /**
         * Get the definition of a contact form.
         * @param id
         * @returns {Promise}
         */
        this.getFormDefinition = function (id) {
            return $q(function (resolve) {
                if (angular.isUndefined(formDefinitions[id])) {
                    $http.get(getFormDefinitionApiUrl(id)).then(function (response) {
                        formDefinitions[id] = response.data;
                        resolve(response.data);
                    });
                } else {
                    resolve(formDefinitions[id]);
                }
            });
        };

        /**
         * Submit the contact data.
         * @param data
         * @returns {Promise}
         */
        this.submit = function (data) {
            return $http.post(geContactSubmitApiUrl(), data);
        };

        /**
         * Get the url of the form definition api.
         * @param id
         * @returns {string}
         */
        function getFormDefinitionApiUrl(id) {
            return [api.baseUrl, api.endpoints.contact.formDefinitions, id].join('/');
        }

        /**
         * Get the url of the contact submit api.
         * @returns {string}
         */
        function geContactSubmitApiUrl() {
            return [api.baseUrl, api.endpoints.contact.submit].join('/');
        }
    }

    angular.module('app.portfolio').service('contactFormService', ContactFormService);
})();
