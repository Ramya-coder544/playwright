const {test, expect}= require('@playwright/test');
const { title } = require('process');

test('FlowTest',async({page})=>
{
     //const context=await browser.newContext();
     //const page=await context.newPage();
     const email='ammu2247@gmail.com';
     const productName=('ZARA COAT 3');
     const Products=await page.locator(".card-body");
    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const UserName=page.locator("#userEmail");
    const Password=page.locator("#userPassword");
    const Login=page.locator("#login");
    await UserName.fill(email);
    await Password.fill('Ammu@2023');
    await Login.click();
    await page.locator('.card-body b').first().waitFor();
    const Title=await page.locator(".card-body b").allTextContents();
    console.log(Title);
    const count=await Products.count();
    for(let i=0;i<count;++i)
    {
       if(await Products.nth(i).locator("b").textContent()===productName){

        //Add to cart
           await Products.nth(i).locator("text= Add To Cart").click();
           break;
    }
}
//click on cart
await page.locator("[routerlink*='cart']").click();
await page.locator('div li').first().waitFor();
// isvisible does not wait for the locator implicitly we need to write explicitly using waitfor()
const bool=await page.locator("h3:has-text('ZARA COAT 3')").isVisible();//locator with tag and text and also assesrtion 
//to check whether the product is visible in the cart or not

expect(bool).toBeTruthy();
//checkout
await page.locator("text=Checkout").click();
//payment details
// Target by index
await page.locator('div.field.small select').nth(0).selectOption({ label: '07' });
await page.locator('div.field.small select').nth(1).selectOption({ label: '20' });
await page.locator("input[type='text']").nth(1).fill("202");
await page.locator("input[type='text']").nth(2).fill("Ramya Guggilapu");
await page.locator("input[type='text']").nth(3).fill("202023");

await page.locator("[placeholder='Select Country']").pressSequentially("ind",{delay:100});//input button by button
const dropdown=await page.locator(".ta-results");
//wait
await dropdown.waitFor();
//Get the count in the dropdown
const dropdowncount=await dropdown.locator("button").count();
for(let i=0;i<dropdowncount;++i){
   const text=await dropdown.locator("button").nth(i).textContent();
   if(text===" India")
   {
     await dropdown.locator("button").nth(i).click();
     break;
   }
}
//assertions
await expect(page.locator(".user__name [type='text'] ").first()).toHaveText(email);
await page.locator("[class*=btnn]").click();

await expect(page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
const orderId=await page.locator(".em-spacer-1 .ng-star-inserted").textContent();
console.log(orderId);

//validate the orderid in the orders page
await page.locator("button[routerlink*='myorders'] ").click();
await page.locator("tbody").waitFor();
const rows=page.locator('tbody tr');
for(let i=0;i<await rows.count();i++){
   const rowsOrderId=await rows.nth(i).locator("th").textContent();
   if(orderId.includes(rowsOrderId)){
      rows.nth(i).locator("button").first().click();
      break;
   }

}
 const OrderDetails=await page.locator(".col-text").textContent();
 expect(orderId.includes(OrderDetails)).toBeTruthy();

 await page.pause();

  
});

