import { WalvetFrontPage } from './app.po';

describe('walvet-front App', function() {
  let page: WalvetFrontPage;

  beforeEach(() => {
    page = new WalvetFrontPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
