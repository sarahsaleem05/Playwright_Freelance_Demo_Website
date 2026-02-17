const {expect} = require('@playwright/test')

class LoginPage{

    constructor(page)
    {
        this.page = page
        this.SignInbutton = "//h2[normalize-space()='Sign In']"
        this.username = "#email1"
        this.password = "#password1"
        this.loginButton = "//button[normalize-space()='Sign in']"
    }

    async VerifySignIn()
    {
        await expect(this.page.locator(this.SignInbutton)).toBeVisible()
    }

    async loginToApplication()
    {
        await this.page.fill(this.username, "jerry@email.com")
        await this.page.fill(this.password, "jerry123")
        await this.page.click(this.loginButton)
    }

}

module.exports=LoginPage;
