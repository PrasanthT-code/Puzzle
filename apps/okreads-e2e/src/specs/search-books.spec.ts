import { $, $$, browser, ExpectedConditions } from 'protractor';

describe('When: Use the search feature', () => {
  it('Then: I should be able to search books by title', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const items = await $$('[data-testing="book-item"]');
    expect(items.length).toBeGreaterThan(1);
  });

  xit('Then: I should see search results as I am typing', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    // TODO: Implement this test!
  });

  it('Then: I should see able to add and undo my book', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('javascript');
    await form.submit();

    const bookAddToList = await $('[data-testing="book-add-to-list"]');
    await bookAddToList.click();

    const items = await $('[data-testing="reading-item"]');
    expect(items.length).toBeGreaterThan(0);

  });
});
