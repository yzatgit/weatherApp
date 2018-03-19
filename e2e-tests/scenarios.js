'use strict';

/* https://github.com/angular/protractor/blob/master/docs/toc.md */

describe('weatherApp', function() {


  it('should automatically redirect to /weather when location hash/fragment is empty', function() {
    browser.get('index.html');
    expect(browser.getLocationAbsUrl()).toMatch("/weather");
  });


  describe('weather', function() {

    beforeEach(function() {
      browser.get('index.html#!/weather');
    });


    it('should render weather when user navigates to /weather', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 1/);
    });

  });


  describe('view2', function() {

    beforeEach(function() {
      browser.get('index.html#!/view2');
    });


    it('should render view2 when user navigates to /view2', function() {
      expect(element.all(by.css('[ng-view] p')).first().getText()).
        toMatch(/partial for view 2/);
    });

  });
});
