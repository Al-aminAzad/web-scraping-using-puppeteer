const puppeteer = require('puppeteer');

(async () => {
  const mediumUrl = 'https://www.businessinsider.com/latest';
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  await page.goto(mediumUrl, { waitUntil: 'load', timeout: 0 });
  //   await page.screenshot({ path: 'wiki.jpg' });
  const results = await page.evaluate(() => {
    let a = document.querySelectorAll('.tout-title-link');
    let b = [...a];
     return b.slice(0,200).map((post) => post.innerText);
    
  });
  console.log(results);
  await browser.close();
})();