(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name unlockspacesFrontApp.usData
   * @description
   * # usData
   * Factory in the unlockspacesFrontApp. Helps to get data from the api
   */
  function usData($resource, CONFIG) {
    // Service logic
    var space = $resource(CONFIG.WEBAPI.BASEURL);

    // Public API here
    var service = {
      space: space
    };
    return service;
  }

  angular.module('unlockspacesFrontApp')
    .factory('usData', ["$resource", "CONFIG", usData]);

})();