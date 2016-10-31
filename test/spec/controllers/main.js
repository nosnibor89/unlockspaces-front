'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('unlockspacesFrontApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('defaults: perPage should be 4 and currentPage should be 1', function(){
    expect(MainCtrl.perPage).toBe(4);
    expect(MainCtrl.currentPage).toBe(1);
  });


});
