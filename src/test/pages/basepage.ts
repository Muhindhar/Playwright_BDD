import {Locator,Page} from 'playwright';
import {EnvReader} from '../utils/envreader'
import { logger } from '../utils/logger';

export class Basepage {
   constructor (protected page:Page){}

    async navigation(){
        await this.page.goto(EnvReader.getBaseUrl())
    }

    async Click(locator:Locator){
        await locator.click();
    }


    async Fill(locator:Locator,value:string){
        await (locator).fill(value);
    }
    

    async gettext(locator:Locator){
        return await (locator).textContent()
    }

}

