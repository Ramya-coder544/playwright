const {test, expect}= require('@playwright/test');

test('Otherway locator',async({page})=>{
await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
await page.getByPlaceholder("email@example.com").fill("ammu2247@gmail.com");
await page.getByPlaceholder("enter your passsword").fill("Ammu@2023");
await page.getByRole('button', {hastext:"Login"}).click();
await page.waitForLoadState('networkidle');
await page.locator(".card-body b").first().waitFor();
await page.locator(".card-body").filter({hasText:"ZARA COAT 3"}).getByRole('button',{name:" Add To Cart"}).click();
await page.getByRole("listitem").getByRole('button',{name:"Cart"}).click();
 await page.locator("div li").first().waitFor();
await page.getByText("ZARA COAT 3").isVisible();
await page.getByRole('button',{ name:'Checkout'}).click();
await page.locator('div.field.small select').nth(0).selectOption({ label: '07' });
await page.locator('div.field.small select').nth(1).selectOption({ label: '20' });
await page.locator("input[type='text']").nth(1).fill("202");
await page.locator("input[type='text']").nth(2).fill("Ramya Guggilapu");
await page.locator("input[type='text']").nth(3).fill("202023");
await page.getByPlaceholder("Select Country").pressSequentially("ind");
await page.getByRole("button",{name :"India"}).nth(1).click();
await page.getByText("PLACE ORDER").click();
await expect(page.getByText("Thankyou for the order.")).toBeVisible();


})