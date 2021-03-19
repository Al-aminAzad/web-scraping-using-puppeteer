const puppeteer = require('puppeteer');

(async () => {
  const mediumUrl = 'https://medium.com/';
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();
  await page.goto(mediumUrl, { waitUntil: 'load', timeout: 0 });
  //   await page.screenshot({ path: 'wiki.jpg' });
  const results = await page.evaluate(() => {
    var a = document.getElementsByClassName('bw hu rb rc rd re rf rg rh ri rj rk rl rm rn ro rp rq rr rs rt ru oc oe of ph oh oi bz');
    let b = [...a];
     return b.slice(0,5).map((post) => post.innerText);
    
  });
  console.log(results);
  await browser.close();
})();
