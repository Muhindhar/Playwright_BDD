import { Basepage } from "./basepage";
import { logger } from "../utils/logger";

export class OrderPage extends Basepage{
    private searchbar = this.page.locator("//input[@name='search']");
    private searchbtn = this.page.locator("//button[@class='btn btn-default btn-lg']")
    private macbookair = this.page.locator("//div[@id='content']//a[text()='MacBook Air']");
    private addtocart = this.page.locator("//button[@id='button-cart']")
    private shopcart  =this.page.locator("//a[@title='Shopping Cart']")
    private cart = this.page.locator("//span[@id='cart-total']");


    async clksearchbar(){
        await this.Fill(this.searchbar,"MacBook")
    }
    async clksearchbtn(){
        await this.Click(this.searchbtn)
    }
    async productclk(){
        await this.Click(this.macbookair)
    }
    async addtocartclck(){
        await this.Click(this.addtocart)
    }
    async clkshopcart(){
        await this.Click(this.shopcart)
    }
    async checkproduct(){
        return await (this.macbookair).isVisible();
    }
}