/**
 * Created on 25/09/16.
 * @author Jurgen Romeijn
 */
(function () {
    'use strict';

    /**
     * A service containing image related functionality for projects.
     * @constructor
     */
    function ProjectImageService() {
        /**
         * Get the images without the featured image.
         * @param project
         * @returns {Array.<T>|*}
         */
        this.getImagesWithoutFeaturedImage = function (project) {
            var images = project.images;
            var featuredImage = project.featuredImage;

            return images.filter(function (image) {
                return image.url !== featuredImage.url;
            })
        };
    }

    angular.module('app.portfolio').service('projectImageService', ProjectImageService);
})();
