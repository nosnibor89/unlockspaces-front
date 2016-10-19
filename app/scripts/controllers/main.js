(function () {
  'use strict';

  /**
   * @ngdoc function
   * @name unlockspacesFrontApp.controller:MainCtrl
   * @description
   * # MainCtrl
   * Controller of the unlockspacesFrontApp, 
   * control behavior of the main page, like pagination, 
   * databinding, etc.
   */
  function MainCtrl($scope, usData) {

    /**
     * Place spaces in scope once the object are succesfully returned
     * 
     * @param {any} data
     */
    function onSpacesSuccess(data) {
      $scope.spaces = data;
    }

    function onSpacesError(data){

    }

    //Get spaces from the API
    usData.space.query(null, onSpacesSuccess, onSpacesError);
  };

  angular.module('unlockspacesFrontApp')
    .controller("MainCtrl", ["$scope", "usData", MainCtrl]);

})();