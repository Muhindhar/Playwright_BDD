import { Browser, BrowserContext, Locator, Logger, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Loginpage } from '../pages/loginpage';
import { Basepage } from '../pages/basepage';
import { logger } from '../utils/logger';
import { RegisterPage } from '../pages/registerpage';
import { OrderPage } from '../pages/orderpage';
import { NewsLetter } from '../pages/newsletterpage';

export class muhiworld extends World{

    browser!: Browser
    context!: BrowserContext
    page!: Page
    login!:Loginpage
    basepage!:Basepage
    register!:RegisterPage
    order!:OrderPage
    logger = logger 
    news!:NewsLetter

}

setWorldConstructor(muhiworld)