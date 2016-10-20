(function () {
  'use strict';

  /**
   * @ngdoc directive
   * @name unlockspacesFrontApp.directive:usSpaceBox
   * @description
   * # Directive for Space Box with Slider.
   */

  function usSpaceBox() {
    return {
      replace: true,
      templateUrl: 'views/templates/us-space-box.html',
      restrict: 'E',
      scope: {
        images: "=",
        price: "@",
        title: "@",
        phone: "@",
        email: "@",
        // available: "=",
        detail: "&onDetail"
      },
      link: function postLink(scope, element, attrs) {

        //Directives - Carousel config
        scope.interval = 3000;
        scope.active = 0;

        //Visual Efects - Behavior
        scope.visibleArrows = false;
      }
    };
  }

  angular.module('unlockspacesFrontApp')
    .directive('usSpaceBox', [usSpaceBox]);
})();