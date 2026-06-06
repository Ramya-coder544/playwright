const {test, expect}= require('@playwright/test');
const { title } = require('process');

test('First Playwright test',async({browser})=>
{
const context=await browser.newContext();
const page= await context.newPage();
const Username= page.locator('input#email');
const Password= page.locator('input#password');
const SignIn=page.locator('#login-btn');
await page.goto("https://eventhub.rahulshettyacademy.com/login");
console.log(await page.title());
await expect(page).toHaveTitle("EventHub — Discover & Book Events");

//type method
await Username.type("ramyaguggilapu1967@gmail.com");
await Password.type("Ammu@2024");
await SignIn.click();
await expect(page.getByText('Invalid email or password')).toBeVisible();

//Fill Method
await Username.fill("");
await Username.fill('ramyaguggilapu1969@gmail.com');
await Password.fill('Ammu@2023');
await SignIn.click();
console.log(await page.locator("a:nth-child(1) > h3:nth-child(1)").nth(0).textContent());
});

test('Page Playwright test',async ({ browser })=>
{
const context=await browser.newContext();
const page= await context.newPage();
const Username=page.locator("#username");
const Password=page.locator('#password');
const DocumentLink=page.locator('[href*="documents-request"]');
const SignIn=page.locator("#signInBtn");
const CardTitle=page.locator('.card-body a');
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title());

//type method
await page.locator("#username").type('rahulshetty')
await page.locator('#password').type('Learning@830$3mK22');   
await page.locator('.radiotextsty').last().click();
await page.locator('#okayBtn').click();

// Assertion to check wheather the button is checked or not
console.log(await page.locator('.radiotextsty').last().isChecked()); 
await expect(page.locator('.radiotextsty').last()).toBeChecked(); 
await page.locator('#terms').click(); 

//Assertion to whether the checkbox is selected or not
await expect(page.locator('#terms')).toBeChecked();
await page.locator('#terms').uncheck();
expect(await (page.locator('#terms')).isChecked()).toBeFalsy();   //Here we are writing await inside the scope which is
//ischecked method not outside, whybcoz we are checking whether it is true or false outsidde the scope
await expect(DocumentLink).toHaveAttribute("class","blinkingText");

// blinking link check


await page.locator("#signInBtn").click();
await expect(page.getByText('Incorrect username/password.')).toBeVisible();

//Fill Method
await Username.fill("");
await Username.fill('rahulshettyacademy'); 
await Password.fill('Learning@830$3mK2');
await SignIn.click();
console.log(await(CardTitle).nth(0).textContent());// single title

//get all the titles in page
const AllTitle=await CardTitle.allTextContents();
console.log(AllTitle);
});

test.only('child window handle', async({browser})=>
{
    const context=await browser.newContext();
    const page=await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const DocumentLink=page.locator('[href*="documents-request"]');
    const [newPage]=await Promise.all([ //this method helps to wait untill all the steps are executed which is passed 
    // in this array 
    context.waitForEvent('page'),//listen to any new page pending,rejection fullfilled
    DocumentLink.click(),
]) // new page is opened
    const text= await newPage.locator(".red").textContent();
    //splitting fo a text 
    const arrayText=text.split("@");
    const domain= arrayText[1].split(" ")[0]
    console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());


})
