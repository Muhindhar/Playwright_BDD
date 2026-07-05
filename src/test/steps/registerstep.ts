import { Given,When,Then } from "@cucumber/cucumber";
import { muhiworld } from "../world/customworld";
import { expect } from "@playwright/test";


Given('the user is on the home page of the website', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.login.navigation();
});

Given('user clicks on the myaccount link', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.clickmyacc();
});

Given('user click on the register button', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.clickregister();
});

Given('user enters the valid fname {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.enterfname(string);
});

Given('user enters the valid lname {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.enterlname(string);
});

Given('user enters the valid email {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.enteremail(string);
});

Given('user enters the valid telephone {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
await this.register.entertele(string);
});

Given('person enters the password {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.enterpass(string);
});

Given('user enters the confirm password {string}', async function (this:muhiworld,string) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.enterconfirm(string);
});

Given('clicks the privasypolicy checkbox', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.clckpp();
});

When('clicks on the continue button in the site', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
  await this.register.clkcont();
});

Then('user should be able to see the successfully register', async function (this:muhiworld) {
  // Write code here that turns the phrase above into concrete actions
    const message = await this.register.success();
    expect(message).toContain("Your Account Has Been Created!");
});