import {Before,After,BeforeAll,AfterAll,Status} from "@cucumber/cucumber";

import { Browser, chromium } from "playwright";
import { muhiworld } from "../world/customworld";
import { Loginpage } from "../pages/loginpage";
import { RegisterPage } from "../pages/registerpage";
import { OrderPage } from "../pages/orderpage";
import { NewsLetter } from "../pages/newsletterpage";
import { setDefaultTimeout } from "@cucumber/cucumber";
setDefaultTimeout(60 * 1000); // 60 seconds
let browser: Browser;

BeforeAll(async () => {
    browser = await chromium.launch({ headless: false });
});

Before(async function (this: muhiworld) {
    this.browser = browser;
    this.context = await browser.newContext();
    this.page = await this.context.newPage();
    this.login = new Loginpage(this.page)
    this.register = new RegisterPage(this.page);
    this.order = new OrderPage(this.page);
    this.news =  new NewsLetter(this.page);
    
});

After(async function (this: muhiworld, { pickle, result }) {

    if (result?.status === Status.FAILED) {
        const screenshot = await this.page.screenshot({
            path: `reports/screenshots/${pickle.name}.png`
        });
        await this.attach(screenshot, "image/png");
    }
    await this.page.close();
    await this.context.close();
});

AfterAll(async () => {
    await browser.close();
});

