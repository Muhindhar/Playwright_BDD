Feature: Regisering to the tutorials ninja site

Feature Description:As a new user i want to register to the site and go to home page

        Background:
            Given the user is on the home page of the website

        Scenario Outline:Registering to thewebsite with valid credentials
              And user clicks on the myaccount link
              And user click on the register button
              And user enters the valid fname "<firstname>"
              And user enters the valid lname "<lastname>"
              And user enters the valid email "<email>"
              And user enters the valid telephone "<phone>"
              And person enters the password "<password>"
              And user enters the confirm password "<confirmpassword>"
              And clicks the privasypolicy checkbox
             When clicks on the continue button in the site
             Then user should be able to see the successfully register

        Examples:
                  | firstname | lastname | email                        | phone      | password    | confirmpassword |
                  | bdd       | pt       | bddplaywrightdemo5@gmail.com | 9098767876 | 12345678900 | 12345678900     |
