const {test, expect}= require('@playwright/test');
const { title } = require('process');
test('Practice test',async({browser})=>
{
const context=await browser.newContext();//intialise the browser
const page= await context.newPage();
const FirstName=page.locator('#firstName');
const lastName=page.locator('#lastName');
const Email=page.locator('#userEmail');
const Phone=page.locator('#userMobile');
const Password=page.locator('#userPassword');
const ConfirmPassword=page.locator('#confirmPassword');
const Login=page.getByText('Login');
//const CardTitle=page.locator('.card-body b ');

await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.locator('a.text-reset').click();
//Fil the form
await FirstName.fill('Srirama');
await lastName.fill('AmmuSri');
await Email.fill('ramaammu@gmail.com');
await Phone.fill('8795954654');
const dropdown=page.locator('[formcontrolname="occupation"]');
await dropdown.selectOption("Engineer");

//waitFor({state:'visible'});
//await page.locator('[formcontrolname="occupation"]').selectOption({ label: 'Engineer' });
await page.locator('input[value="Female"]').click();

await Password.fill('Ammu@2023');
await ConfirmPassword.fill('Ammu@2023');
await page.locator('input[type="checkbox"]').click();
await page.locator('#login').click();
await expect(page.getByText('Account Created Successfully')).toBeVisible();
await Login.click();

await page.locator('#userEmail').fill('ramaammu@gmail.com');
await page.locator('#userPassword').fill('Ammu@2023');
await page.locator('input[type="submit"]').click();
//method to load all the calls or wait untill all the calls are made than return value
//await page.waitForLoadState('networkidle');
await page.locator('.card-body b ').first().waitFor(); //wait for the particular element
const titles=await page.locator('.card-body b ').allTextContents();
console.log(titles);


});