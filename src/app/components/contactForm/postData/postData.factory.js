/**
 * Created on 14/08/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A factory to create post data for contact forms.
     * @returns {{make: make}}
     */
    function postDataFactory() {
        return  {
            /**
             * Create the post data for a contact form.
             * @param formId
             * @param nonce
             * @param data
             * @returns {{form_id: *, form_nonce: *, ccf_form: number}}
             */
            make: function (formId, nonce, data) {
                var postData = {
                    form_id: formId,
                    form_nonce: nonce,
                    ccf_form: 1
                };
                angular.forEach(data, function (value, key) {
                    var newKey = ['ccf', 'field', key].join('_');
                    postData[newKey] = value;
                });
                return postData;
            }
        }
    }

    angular.module('app.portfolio').factory('postDataFactory', postDataFactory);
})();
