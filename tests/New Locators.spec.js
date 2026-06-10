const {test, expect}= require('@playwright/test');

test('special locators',async({page})=>
{
 await page.goto("https://rahulshettyacademy.com/angularpractice/");
 await page.locator('form input[name="name"]').fill("Ramya");
 //await page.getByLabel("Email").fill("ramyaguggilapu1969@gmail.com");
 await page.getByPlaceholder("Password").fill("Ammu@2023");
 await page.getByLabel("Check me out if you Love IceCreams!").click();
 await page.getByLabel("Gender").selectOption("Female");
 await page.getByLabel("Employed").check();
 await page.getByRole("button",{name:'submit'}).click();
 await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
 await page.getByRole("link",{name :"shop"}).click();
//code via codegen(record and play)
 await page.locator('app-card').filter({ hasText: 'Nokia Edge $24.99 Lorem ipsum' }).getByRole('button').click();
  await page.getByText('Checkout ( 1 ) (current)').click();
  await page.getByRole('button', { name: 'Checkout' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).click();
  await page.getByRole('textbox', { name: 'Please choose your delivery' }).fill('india');
  await page.getByText('India').click();
  await page.getByText('I agree with the term &').click();
  await page.getByRole('button', { name: 'Purchase' }).click();
  await expect(page.getByText('× Success! Thank you! Your')).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Please choose your delivery' })).toHaveValue('India');
});