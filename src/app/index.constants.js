/* global */
(function () {
    'use strict';

    /**
     * Set constants.
     */
    angular.module('app.portfolio')
        .constant('api', {
            projects: '/wp-json/projects/v1/projects',
            contact: {
                formDefinitions: '/wp-json/ccf/v1/forms',
                submit: '/?v='
            }
        })
        .constant('title', {
            home: 'Jurgen Romeijn | Full stack e-commerce developer',
            projects: 'Projecten | Jurgen Romeijn',
            project: ' | Projecten | Jurgen Romeijn',
            about: 'Over mij | Jurgen Romeijn',
            contact: 'Contact | Jurgen Romeijn'
        });
})();
