'use strict';

describe('Directive: usSpaceBox', function () {

  // load the directive's module
  beforeEach(module('unlockspacesFrontApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<us-space-box></us-space-box>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the usSpaceBox directive');
  }));
});
