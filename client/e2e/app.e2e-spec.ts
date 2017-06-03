import { AutoTownMayorWebAppPage } from './app.po';

describe('auto-town-mayor-web-app App', () => {
  let page: AutoTownMayorWebAppPage;

  beforeEach(() => {
    page = new AutoTownMayorWebAppPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
