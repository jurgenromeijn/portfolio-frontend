/* global */
(function() {
  'use strict';

  angular.module('app.portfolio')
      .constant('api', {
          baseUrl: 'http://localhost:8000',
          endpoints: {
              projects: 'wp-json/projects/v1/projects',
              contact: {
                  formDefinitions: 'wp-json/ccf/v1/forms',
                  submit: '?v=1470851965'
              }
          }
      });
})();
