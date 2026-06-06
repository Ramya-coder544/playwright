const {test, expect}= require('@playwright/test');

test('special locators',async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 //await page.getByLabel("Name").fill("Ramya");
 //await page.getByLabel("Email").fill("ramyaguggilapu1969@gmail.com");
 await page.getByPlaceholder("Password").fill("Ammu@2023");
 await page.getByLabel("Check me out if you Love IceCreams!").click();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByLabel("Employed").check();
 await page.getByRole("button",{name:'submit'}).click();
 await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
 await page.getByRole("link",{name :"shop"}).click();
 await page.locator("app-card").filter({hasText:'Nokia Edge'}).getByRole("button").click();


});