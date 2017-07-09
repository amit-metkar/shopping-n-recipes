import { ShoppingNRecipesPage } from './app.po';

describe('shopping-n-recipes App', () => {
  let page: ShoppingNRecipesPage;

  beforeEach(() => {
    page = new ShoppingNRecipesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
