'use strict';

/**
 * @ngdoc service
 * @name unlockspacesFrontApp.usData
 * @description
 * # usData
 * Factory in the unlockspacesFrontApp. Helps to get data from the api
 */
function usData($resource, CONFIG) {

  console.log(CONFIG.WEBAPI.BASEURL);
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
