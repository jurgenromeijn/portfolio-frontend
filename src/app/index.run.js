(function () {
    'use strict';

    /**
     * Create all logic that needs to run all the time.
     * @param $log
     */
    function runBlock($log) {
        $log.debug('runBlock end');
    }

    angular
        .module('app.portfolio')
        .run(runBlock);
})();
