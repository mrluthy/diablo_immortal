// @ts-check
import '@playwright/test'


export class Login {
    
    constructor(page) {
        this.page = page;
        this.username = this.page.getByText("Phone number, username, or email");
        this.password = this.page.locator('xpath=//*[@id="loginForm"]/div/div[2]/div/label/input');
        this.submit = this.page.getByText("Log in", { exact: true});
    }

    async gotoURL() {
        this.url = this.page.goto("https://www.instagram.com/");
    }

    async login_actions() {
        await this.username.fill("luthyqa@gmail.com");
        await this.password.fill("Liveview123");
        await this.submit.click();
    }
}