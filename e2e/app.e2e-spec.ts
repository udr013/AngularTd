import { AngularTdPage } from './app.po';

describe('angular-td App', function() {
  let page: AngularTdPage;

  beforeEach(() => {
    page = new AngularTdPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
