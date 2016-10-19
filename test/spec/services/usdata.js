'use strict';

describe('Service: usData', function () {

  // load the service's module
  beforeEach(module('unlockspacesFrontApp'));

  // instantiate service
  var usData;
  beforeEach(inject(function (_usData_) {
    usData = _usData_;
  }));

  it('should do something', function () {
    expect(!!usData).toBe(true);
  });

});
