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
     * @param $httpParamSerializer
     * @param postDataFactory
     * @constructor
     */
    function ContactFormService($http, $q, api, $httpParamSerializer, postDataFactory) {
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
         *
         * @param formId
         * @param nonce
         * @param data
         * @returns {Promise}
         */
        this.submit = function (formId, nonce, data) {
            var postData = postDataFactory.make(formId, nonce, data);
            return $q(function (resolve) {
                $http({
                    method: 'POST',
                    url: geContactSubmitApiUrl(),
                    data: $httpParamSerializer(postData),
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }).then(function (response) {
                    resolve(response.data);
                })
            });
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
            var timestamp = Math.round(new Date().getTime() / 1000);
            return [api.baseUrl, '/', api.endpoints.contact.submit, timestamp].join('');
        }
    }

    angular.module('app.portfolio').service('contactFormService', ContactFormService);
})();
