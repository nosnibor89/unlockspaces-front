(function () {
  'use strict';

  /**
   * @ngdoc service
   * @name unlockspacesFrontApp.usSpacePager
   * @description
   * # usSpacePager
   * Factory in the unlockspacesFrontApp.
   */
  function usSpacePager() {
      // Service logic
      function getPageItems(currentPage, maxPage, items) {
        var pageItems,
          totalItems = items.length,
          startIndex = (currentPage - 1) * maxPage,
          endIndex = Math.min(startIndex + maxPage - 1, totalItems - 1);
        pageItems = items.slice(startIndex, endIndex + 1);
        return pageItems;
      }

      // Public API here
      var service = {
        getPageItems: getPageItems
      };
      return service;
    }
  angular.module('unlockspacesFrontApp')
    .factory('usSpacePager', [usSpacePager]);
})();
