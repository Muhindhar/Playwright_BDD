
import { Basepage } from "./basepage";

export class NewsLetter extends Basepage{
    private newslink = this.page.locator("//a[text()='Subscribe / unsubscribe to newsletter']");
    private contbtn = this.page.locator("//input[@value='Continue']");
    private yesbtn = this.page.locator("//input[@value='1']")
    private nobtn = this.page.locator("//input[@value='0']");
    private status = this.page.locator("//div[@class='alert alert-success alert-dismissible']");

    async clknewsbtn(){
        await this.Click(this.newslink);
    }
    async clkyes(){
        await this.Click(this.yesbtn);
    }
    async clknobtn(){
        await this.Click(this.nobtn); 
    }
    async contbtnclk(){
        await this.Click(this.contbtn);
    }
    async statusMessage() {
    return this.status;
}


}