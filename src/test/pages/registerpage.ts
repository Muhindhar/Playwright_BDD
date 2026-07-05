import { FILE } from "node:dns";
import { logger } from "../utils/logger";
import { Basepage } from "./basepage";

export class RegisterPage extends Basepage{
    private myacc = this.page.locator("//span[normalize-space()='My Account']");
    private register=this.page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Register']");
    private fname = this.page.locator("//input[@id='input-firstname']");
    private lastname = this.page.locator("//input[@id='input-lastname']");
    private email = this.page.locator("//input[@id='input-email']");
    private phone = this.page.locator("//input[@id='input-telephone']");
    private password = this.page.locator("//input[@id='input-password']");
    private conpass = this.page.locator("//input[@id='input-confirm']");
    private pp= this.page.locator("//input[@name='agree']");
    private contbtn = this.page.locator("//input[@value='Continue']");
    private successreg = this.page.locator("//h1[normalize-space()='Your Account Has Been Created!']");


    async clickmyacc(){
        logger.info("Clicking my acc link");
        await this.Click(this.myacc);
    }
    async clickregister(){
        logger.info("Clickinig register")
        await this.Click(this.register);
    }
    async enterfname(fname:string){
        await this.Fill(this.fname,fname)
    }
    async enterlname(lname:string){
        await this.Fill(this.lastname,lname);
    }
    async enteremail(emaill:string){
        await this.Fill(this.email,emaill)
    }
    async entertele(number:string){
        await this.Fill(this.phone,number)
    }
    async enterpass(pass:string){
        await this.Fill(this.password,pass)
    }
    async enterconfirm(confirmpass:string){
        await this.Fill(this.conpass,confirmpass)
    }

    async clckpp(){
        await this.Click(this.pp);
    }

    async clkcont(){
        await this.Click(this.contbtn);
    }

    async success(){
        await this.successreg.waitFor({state:'visible'});
        return await this.gettext(this.successreg)
    }

}

