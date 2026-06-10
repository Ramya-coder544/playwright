const{test,expect}=require('@playwright/test');

test("Calendar Validations", async({page})=>
{
    const MonthNumber="6";
    const Date="15";
    const Year="2027";
    const expectedlist = [MonthNumber,Date,Year];

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    await page.locator(".react-date-picker__inputGroup").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.getByText(Year).click();
    await page.locator(".react-calendar__year-view__months__month").nth(Number(MonthNumber)-1).click();
    await page.locator("//abbr[text()   ='"+Date+"']") .click();
    //comparing date 
    const input=await page.locator("react-date-picker__inputGroup");
    for(let i=0;i<expectedlist;i++){
        const value=await input.nth(i).inputValue();
        expect(value).toEqual(expectedlist[i]);

    }
 
});