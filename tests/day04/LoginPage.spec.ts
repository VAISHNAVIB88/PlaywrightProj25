import test from "@playwright/test";
test("Login Page",async({page})=>{
await page.goto("https://login.salesforce.com/?locale=in")
await page.locator("#username").fill("vidyar@testleaf.com")
await page.locator("#password").fill("Sales@123") // or await page.fill("#password","crmsfa")
await page.click("#Login")
await page.waitForTimeout(10000)
const pageTitle=await page.title()
console.log(pageTitle)


})