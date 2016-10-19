'use strict';

describe('Service: usSpacePager', function () {

  // load the service's module
  beforeEach(module('unlockspacesFrontApp'));

  // instantiate service
  var usSpacePager;
  beforeEach(inject(function (_usSpacePager_) {
    usSpacePager = _usSpacePager_;
  }));

  it('should do something', function () {
    expect(!!usSpacePager).toBe(true);
  });

});
