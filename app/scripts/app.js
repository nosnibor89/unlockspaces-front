'use strict';

/**
 * @ngdoc overview
 * @name unlockspacesFrontApp
 * @description
 * # unlockspacesFrontApp
 *
 * Main module of the application.
 */
angular
  .module('unlockspacesFrontApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(["$routeProvider",function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
          redirectTo: '/'
      });
  }]);
