// @ts-check
import '@playwright/test'


export class URL {
    
    constructor(page) {
        this.page = page;
    }

    async gotoURL() {
        await this.page.goto("https://diabloimmortal.blizzard.com/en-us/");
    }
}