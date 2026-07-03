import { Browser, BrowserContext, Locator, Logger, Page } from '@playwright/test';
import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Loginpage } from '../pages/loginpage';
import { Basepage } from '../pages/basepage';
import { logger } from '../utils/logger';

export class muhiworld extends World{

    browser!: Browser
    context!: BrowserContext
    page!: Page
    login!:Loginpage
    basepage!:Basepage
    logger = logger 

}

setWorldConstructor(muhiworld)