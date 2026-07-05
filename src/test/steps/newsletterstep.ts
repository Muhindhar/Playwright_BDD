
import { Given,When,Then } from "@cucumber/cucumber";
import { muhiworld } from "../world/customworld";
import { expect } from "@playwright/test";

Given('the user is on the home page of the tutorials ninja site', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
    await this.register.navigation();
    await this.login.myaccclick();
    await this.login.loginlinkbtn();
    await this.login.directlogin();
});

Given('user clicks on the newsletter link the homepage', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  
  await this.news.clknewsbtn();
});

Given('user clicks on the yes radiobutton in the site', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.news.clkyes();
});

When('user clicks on the continue button', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.news.contbtnclk();
});

Then('user should be able to subscribe successfully', async function (this: muhiworld) {
    const msg = await this.news.statusMessage();

    await expect(msg).toContainText(
        "Success: Your newsletter subscription has been successfully updated!"
    );
});

Given('user clicks on the no radiobutton in the site', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.news.clknobtn();
});

Then('user should be able to Unsubscribe successfully', async function (this: muhiworld) {
    const msg = await this.news.statusMessage();

    await expect(msg).toContainText(
        "Success: Your newsletter subscription has been successfully updated!"
    );
});
