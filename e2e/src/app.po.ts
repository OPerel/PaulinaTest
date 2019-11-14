import { browser, by, element } from 'protractor';

import { env } from '../../src/environments/environment';

const rootUrl = `http://localhost:${env.PORT}`;

export class AppPage {
  navigateToAppRoot() {
    browser.get(rootUrl);
    browser.sleep(1000);
  }

  getOktaLoginElementsText() {
    return element(by.css('.okta-form-title.o-form-head')).getText();
  }

  // navigateTo() {
  //   return browser.get(browser.baseUrl) as Promise<any>;
  // }

  // getTitleText() {
  //   return element(by.css('app-root .content span')).getText() as Promise<string>;
  // }
}
