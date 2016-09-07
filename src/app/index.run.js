(function () {
    'use strict';

    /**
     * Sets up components that are not bound to other components.
     * @param pageService
     * @param title
     */
    function runBlock(pageService, title) {
        pageService.setTitle(title.home);
    }

    angular
        .module('app.portfolio')
        .run(runBlock);
})();
