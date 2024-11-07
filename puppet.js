const puppeteer = require("puppeteer");
const fs = require("fs");
let data = [];

async function getDataFromWeb() {
  const browser = await puppeteer.launch();

  const page = await browser.newPage();

  await page.goto(`url`);
  const newData = await page.evaluate(() => {
    return JSON.parse(document.querySelector("pre").innerHTML);
  });
  data.push(newData);
  page.close();

  process.exit(0);
}

process.on("exit", () => {
  const oldData = JSON.parse(fs.readFileSync("data.json"));
  fs.writeFileSync("data.json", JSON.stringify(oldData.concat(data)));
});

getDataFromWeb();
