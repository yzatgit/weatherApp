'use strict';

describe('weatherApp.forecast module', function() {

  beforeEach(module('weatherApp.forecast'));

  describe('forecast controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var forecastCtrl = $controller('forecastCtrl');
      expect(forecastCtrl).toBeDefined();
    }));

  });
});