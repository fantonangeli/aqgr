"use strict";

const puppeteer = require("puppeteer");
const tableSelector = "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-9 > app-fish-stat-table > app-tree-table > div > table > tbody > tr:nth-child(1) > td.align-top.text-truncate.index-0";
const screenshotsPath="screenshots/";

async function clickAndShot(page, filename, selectors=[]) {
    for (var i = 0, len = selectors.length; i < len; i++) {
        await page.$eval(selectors[i], el => el.click());
    }

    await page.waitFor(500);
    await page.screenshot({ path: screenshotsPath+filename}).catch((err) => console.log(err));
}





(async () => {
    let pageCount=101;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:4200', {waitUntil: 'networkidle0'});

    await page.setViewport({
        width: 980,
        height: 3000,
        deviceScaleFactor: 1,
    })

    //http://localhost:4200---------------------------------------------------

    await clickAndShot(page, (pageCount++)+'.png');

    await clickAndShot(page, (pageCount++)+'.png',[ "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-9 > app-fish-stat-table > app-tree-table > div > table > tbody > tr:nth-child(1) > td.align-top.text-truncate.index-0"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-9 > app-fish-stat-table > app-tree-table > div > table > tbody > tr:nth-child(2) > td.align-top.text-truncate.index-0"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-3 > app-filters > div:nth-child(1) > p > app-filter-terms > div > p:nth-child(3) > a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-3 > app-filters > div:nth-child(2) > p > app-filter-terms > div > p:nth-child(2) > a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-9 > app-fish-stat-table > app-tree-table > div > table > tbody > tr:nth-child(1) > td.align-top.text-truncate.index-0"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-9 > app-fish-stat-table > app-tree-table > div > table > tbody > tr:nth-child(2) > td.align-top.text-truncate.index-0"]);


    // http://localhost:4200/country/CHN-------------------------------------
    pageCount=201;
    await page.goto("http://localhost:4200/country/CHN", {waitUntil: 'networkidle0'});

    await clickAndShot(page, (pageCount++)+'.png',[]);


    // await page.waitForSelector(tableSelector);
    await browser.close();
})();
