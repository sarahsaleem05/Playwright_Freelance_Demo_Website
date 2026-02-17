const {test, expect} = require('@playwright/test');
const LoginPage = require("../pages/loginpage")
const HomePage = require("../pages/homepage")

test ('Login Into Application', async ({page}) => 
{

    await page.goto('https://freelance-learn-automation.vercel.app/login', {
    timeout: 30000
});
    const loginPage =new LoginPage(page)

    await loginPage.loginToApplication()

    const homePage = new HomePage(page)

    await homePage.verifyHomePageTitle()

    await homePage.LogoutfromApplication()

    await loginPage.VerifySignIn()
});