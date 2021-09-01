const cheerio = require("cheerio");
const crawler = require("./crawler");

const parse = decodedResult => {
  //console.log(decodedResult);
  const $ = cheerio.load(decodedResult);
  const titles = $("h3.r").find("a");
  const alinks = $("cite");

  for (let i = 0; i < titles.length; i += 1) {
    const title = $(titles[i]).text();
    const alink = $(alinks[i]).text();

    console.log(title + " [ " + alink + " ] ");
  }
};

crawler.crawl(parse)({ q: "브릴리언트 금수저" });
