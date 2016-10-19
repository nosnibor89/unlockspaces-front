(function(){
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
var MainCtrl = function($scope){
  
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 600 + slides.length + 1;
    slides.push({
      id: currIndex++
    });
  };

  for (var i = 0; i < 4; i++) {
    $scope.addSlide();
  }

  
};



angular.module('unlockspacesFrontApp')
  .controller("MainCtrl",["$scope",MainCtrl]);

})();
