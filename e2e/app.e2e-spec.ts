import { EarthWebPage } from './app.po';

describe('earth-web App', () => {
  let page: EarthWebPage;

  beforeEach(() => {
    page = new EarthWebPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
