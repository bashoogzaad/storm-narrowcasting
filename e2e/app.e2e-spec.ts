import { StormNarrowcastingPage } from './app.po';

describe('storm-narrowcasting App', () => {
  let page: StormNarrowcastingPage;

  beforeEach(() => {
    page = new StormNarrowcastingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
