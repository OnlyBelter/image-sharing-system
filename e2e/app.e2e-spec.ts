import { FileSharingSystemPage } from './app.po';

describe('image-sharing-system App', () => {
  let page: FileSharingSystemPage;

  beforeEach(() => {
    page = new FileSharingSystemPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
