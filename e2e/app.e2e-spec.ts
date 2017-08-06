import { FallenAngelsSitePage } from './app.po';

describe('fallen-angels-site App', () => {
  let page: FallenAngelsSitePage;

  beforeEach(() => {
    page = new FallenAngelsSitePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
