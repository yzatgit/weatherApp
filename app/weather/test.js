'use strict';

describe('weatherApp.weather module', function() {

  beforeEach(module('weatherApp.weather'));

  describe('weather controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var weatherCtrl = $controller('weatherCtrl');
      expect(weatherCtrl).toBeDefined();
    }));

  });
});