import { logger } from "../utils/logger";
import { Basepage } from "./basepage";

let log = logger
export class Loginpage extends Basepage{
    private myacc = this.page.locator("//span[normalize-space()='My Account']")
    private loginlink = this.page.locator("//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']");
    private email = this.page.locator("//input[@id='input-email']");
    private password = this.page.locator("//input[@id='input-password']");
    private loginbtn =  this.page.locator("//input[@value='Login']");
    private wrongpass =  this.page.locator("//div[@class='alert alert-danger alert-dismissible']");
    private loggedin = this.page.locator("//h2[normalize-space()='My Account']");

    // private myacc = "//span[normalize-space()='My Account']";
    // private loginlink = "//ul[@class='dropdown-menu dropdown-menu-right']//a[normalize-space()='Login']";
    // private email = "//input[@id='input-email']";
    async myaccclick(){
        log.info("Clicking the my account")
        await this.Click(this.myacc)
    }
    async loginlinkbtn(){
        log.info("click the login button link")        
        await this.Click(this.loginlink);
    }
    async loginbtnclk(){
        log.info("click the login button ")
        await this.Click(this.loginbtn);
    }
    async emailenter(email:string){
        log.info("Entering email")

        await this.Fill(this.email,email)
    }

    async enterpass(password:string){
        log.info("enters the password")
        await this.Fill(this.password,password)
    } 
    
    async logged(){
        log.info("logged in successfully")
        return await this.gettext(this.loggedin);
    }

    async wrongpasscheck(){
        log.info("Didn't loggedin")
        return await this.gettext(this.wrongpass);
    }


    
}