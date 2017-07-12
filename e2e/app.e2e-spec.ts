import { HerokuTestAppPage } from './app.po';

describe('heroku-test-app App', function() {
  let page: HerokuTestAppPage;

  beforeEach(() => {
    page = new HerokuTestAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
