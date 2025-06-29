import {chromium,test} from "@playwright/test";
test("To Launch Browser", async() =>{
    // Set Browser
    //Default wait time  30 second
    const browserInstance = await chromium.launch({headless: false, channel: "chrome"});
    // open new window/context
    const browserContext = await browserInstance.newContext();
    //open a page that is new tabs
    const page =  await browserContext.newPage();
    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    await page.waitForTimeout(5000)
});

//command to run spec file
//npx playwright test filename - run this from root folder -
// open termainal and in terminal you can see PS C:\Playwright Workspace\playwright-testleafproject>