"use strict";

const puppeteer = require("puppeteer");
const tableSelector = "#maincontent > div > app-root > app-home > div > div:nth-child(8) > div.col-sm-12.col-md-9 > app-fish-stat-table > app-tree-table > div > table > tbody > tr:nth-child(1) > td.align-top.text-truncate.index-0";
const screenshotsPath="screenshots/";

async function clickAndShot(page, filename, selectors=[]) {
    for (var i = 0, len = selectors.length; i < len; i++) {
        await page.$eval(selectors[i], el => el.click());
    }

    await shot(page,filename);
}

async function shot(page, filename) {
    await page.waitFor(1000);
    await page.screenshot({ path: screenshotsPath+filename}).catch((err) => console.log(err));
}

async function playWithFiltersWithCountry(page, pageCount){
    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.countries .index-0 a"]); 

    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.taxonomies .index-5 a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.species .index-2 a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.ftype .index-0 a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.sftype .index-0 a"]);

}

async function playWithFiltersNoCountry(page, pageCount){
    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.taxonomies .index-5 a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.species .index-3 a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.ftype .index-0 a"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "app-filter-terms.sftype .index-0 a"]);

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

    await clickAndShot(page, (pageCount++)+'.png',[ "app-tree-table > div > table > tbody > tr:nth-child(1) > td.align-top.text-truncate.index-0"]);

    await clickAndShot(page, (pageCount++)+'.png',[ "app-tree-table > div > table > tbody > tr:nth-child(2) > td.align-top.text-truncate.index-0"]);

    await page.type('app-filter-terms.species input', 'mono', {delay: 200});
    await shot(page, (pageCount++)+'.png');
    await (await page.$('app-filter-terms.species input')).click({ clickCount: 3 })
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');
    await page.keyboard.press('Backspace');

    await playWithFiltersNoCountry(page, pageCount);

    // await clickAndShot(page, (pageCount++)+'.png',[ "app-tree-table > div > table > tbody > tr:nth-child(1) > td.align-top.text-truncate.index-0"]);
    //
    // await clickAndShot(page, (pageCount++)+'.png',[ "app-tree-table > div > table > tbody > tr:nth-child(2) > td.align-top.text-truncate.index-0"]);


    // http://localhost:4200/country/CHN-------------------------------------
    pageCount=201;
    await page.goto("http://localhost:4200/country/CHN", {waitUntil: 'networkidle0'});

    await clickAndShot(page, (pageCount++)+'.png',[]);

    // http://localhost:4200/world-------------------------------------
    pageCount=301;
    await page.goto("http://localhost:4200/world", {waitUntil: 'networkidle0'});

    await clickAndShot(page, (pageCount++)+'.png',[]);

    await playWithFiltersWithCountry(page, pageCount);


    // http://localhost:4200/use-------------------------------------
    pageCount=401;
    await page.goto("http://localhost:4200/use", {waitUntil: 'networkidle0'});

    await clickAndShot(page, (pageCount++)+'.png',[]);

    await playWithFiltersWithCountry(page, pageCount);

    // await page.waitForSelector(tableSelector);
    await browser.close();
})();
