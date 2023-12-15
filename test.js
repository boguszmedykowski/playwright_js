const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: false }); // Ustawienie headless na false
  const page = await browser.newPage();
  await page.goto('https://example.com');
  await page.screenshot({ path: `example.png` });
//  await browser.close();
})();

