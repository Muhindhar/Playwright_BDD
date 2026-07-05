import { Given,When,Then } from "@cucumber/cucumber";
import { muhiworld } from "../world/customworld";
import { expect } from "@playwright/test";

Given('the user is launched on the tutorialsninja website', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.navigation();
  
});

Given('user is loggedin and launched to the homepage', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
    await this.login.myaccclick();
    await this.login.loginlinkbtn();
    await this.login.directlogin();
    
});

Given('user enters the product name as {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.order.clksearchbar();
});

Given('clicks on the search button', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.order.clksearchbtn();
});

Given('user enters the Macbook product', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.order.productclk();
});

Given('user clicks on the add to cart button', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.order.addtocartclck();
});

When('clicks on the shoppingcart link', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.order.clkshopcart();
});

Then('user should be able to see the selected product in the cart', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await expect(this.order.checkproduct).toBeTruthy();
});