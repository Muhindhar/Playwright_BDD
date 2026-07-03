import { Given,When,Then } from "@cucumber/cucumber";
import { muhiworld } from "../world/customworld";
import { expect } from "@playwright/test";

Given('the user is on the url', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
    await this.login.navigation();
});

Given('user clicks on the myacc link', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.myaccclick();
});

Given('user clicks on the loginlink', async function (this:muhiworld) {
    // Write code here that turns the phrase above into concrete actions
    await this.login.loginlinkbtn();
    
});

Given('user enters the valid email as {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
    await this.login.emailenter(string);
});

Given('user enters password as {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
await this.login.enterpass(string);
});

When('user clicks on the login button', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.loginbtnclk();
});

Then('user should be loggedin successfully', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.logged();
  await expect(this.login.logged).toBeTruthy();
});

Then('user should not be loggedin successfully', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.wrongpasscheck();
  await expect(this.login.wrongpasscheck).toBeTruthy();
});

