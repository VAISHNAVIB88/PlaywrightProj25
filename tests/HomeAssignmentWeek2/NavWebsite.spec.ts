import test, { chromium, firefox } from "@playwright/test";

test("Launch Edge Browser", async()=>{
    
const browserInstance= await chromium.launch({headless:false,channel:"msedge"});
const browserContext = await browserInstance.newContext();
const page= await browserContext.newPage();
await page.goto("https://www.redbus.in");
const pageTitle=await page.title();
const pageURL=await page.url();
console.log(`The page you visited is ${pageTitle}`)
console.log(`The URL is ${pageURL}`)

});
test("Launch FireFox Browser", async()=>{
    
const browserInstance= await firefox.launch({headless:false,channel:"firefox"});
const browserContext = await browserInstance.newContext();
const page= await browserContext.newPage();
await page.goto("https://www.flipkart.com");
const pageTitle=await page.title();
const pageURL=await page.url();
console.log(`The page you visited is ${pageTitle}`)
console.log(`The URL is ${pageURL}`)

});
