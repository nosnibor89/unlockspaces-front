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
  function MainCtrl($scope, $filter, $uibModal, usData, usSpacePager) {

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
      $scope.t = data;
      main.totalItems = main.spaces.length;
      main.viewSpaces = usSpacePager.getPageItems(main.currentPage, main.perPage, main.spaces);
    };

    /**
     * Show error to the user
     * 
     * @param {any} data
     */
    function onSpacesError(data) {
      $scope.error = "Spaces could not be loaded!";
    };

    /**
     * Handler function that handles when page is change.
     */
    function pageChanged() {
      main.viewSpaces = usSpacePager.getPageItems(main.currentPage, main.perPage, main.spaces);
    };

    /**
     * Get Details of a single space from all the spaces.
     * 
     * @param {any} e
     * @param {any} id
     */
    function getDetails(e, id) {
      e.preventDefault();
      var filteredSpaces = $filter('filter')(main.spaces, { id: id });
      $scope.space = filteredSpaces[0];
      //Modal Instance
      $scope.detailModal = $uibModal.open({
        templateUrl: 'views/templates/detail.html',
        controller: 'MainCtrl',
        size: "md",
        scope: $scope
      });
    };

    /**
     * Helper that allows to close modal intance 
     */
    function closeModal() {
      $scope.detailModal.dismiss();
    };

    //Binding members
    main.getDetails = getDetails;
    $scope.closeModal = closeModal;
    $scope.pageChanged = pageChanged;

    //Get spaces from the API
    usData.space.query(null, onSpacesSuccess, onSpacesError);

  };

  angular.module('unlockspacesFrontApp')
    .controller("MainCtrl", ["$scope", "$filter", "$uibModal", "usData", "usSpacePager", MainCtrl]);

})();