Feature:Subscribing and Unsubscribing the newsletter

Feature Description: As a registered user i want to Unsubscribe and Subscribe the newsletter in
the website

        Background:
            Given the user is on the home page of the tutorials ninja site
        Scenario: Subscribe to the newsletter

              And user clicks on the newsletter link the homepage
              And user clicks on the yes radiobutton in the site
             When user clicks on the continue button
             Then user should be able to subscribe successfully

        Scenario: Unsubscribe to the newsletter

              And user clicks on the newsletter link the homepage
              And user clicks on the no radiobutton in the site
             When user clicks on the continue button
             Then user should be able to Unsubscribe successfully