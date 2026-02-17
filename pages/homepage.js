const {expect} = require('@playwright/test')
 
class HomePage{

    constructor(page)
    {
        this.page = page
        this.homePageTitle = "//h1[normalize-space()='Learn Automation Courses']"
        this.menu = "//img[@alt='menu']"
        this.logout = "//button[normalize-space()='Sign out']"
    }

    async verifyHomePageTitle()
    {
        await expect(this.page.locator(this.homePageTitle)).toBeVisible()
    }

    async LogoutfromApplication()
    {
        await this.page.click(this.menu)
        await this.page.click(this.logout)
    }

}

module.exports = HomePage