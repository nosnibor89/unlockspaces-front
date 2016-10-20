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
  /** 
   * @description
   * Constants for the application.
   * Note: For testing purposes the BASEURL is the only url provided
   */
  .constant('CONFIG', {
    'WEBAPI': {
      'BASEURL': 'https://unlockspaces.com/api/search/findspaces/searchVenuesLatLongTimeRange/-33.4318181/-70.6203973/13954/2016-7-25-0-0/Cualquiera/1'
    }
  })
  /**
   * @params Angular NgRoute Service Object
   * @description
   * SPA routing setup
   */
  .config(['$routeProvider', function ($routeProvider) {
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