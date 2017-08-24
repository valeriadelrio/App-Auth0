import { AppAuthPage } from './app.po';

describe('app-auth App', () => {
  let page: AppAuthPage;

  beforeEach(() => {
    page = new AppAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
