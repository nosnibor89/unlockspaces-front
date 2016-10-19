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
  function MainCtrl($scope, $uibModal, usData, usSpacePager) {

    var main = this;
    main.perPage = 4;
    main.currentPage = 1;

    /**
     * Place spaces in scope once the object are succesfully returned.
     * Puts in scope, the space for the first page.
     * 
     * @param {any} data
     */
    function onSpacesSuccess(data) {
      main.spaces = data;
      main.totalItems = main.spaces.length;
      main.viewSpaces = usSpacePager.getPageItems(main.currentPage, main.perPage, main.spaces);
    };

    /**
     * Show error to the user
     * 
     * @param {any} data
     */
    function onSpacesError(data) {

    };

    /**
     * Handler function that handles when page is change.
     */
    $scope.pageChanged = function () {
      main.viewSpaces = usSpacePager.getPageItems(main.currentPage, main.perPage, main.spaces);
    };

    //Get spaces from the API
    usData.space.query(null, onSpacesSuccess, onSpacesError);

  };

  angular.module('unlockspacesFrontApp')
    .controller("MainCtrl", ["$scope", "$uibModal", "usData", "usSpacePager", MainCtrl]);

})();