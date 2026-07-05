Feature:Order product from the website

Feature Description:As a logged in user i want to order the product

        Background:
            Given the user is launched on the tutorialsninja website

        Scenario:Order product

              And user is loggedin and launched to the homepage
              And user enters the product name as "MacBook Air"
              And clicks on the search button
              And user enters the Macbook product
              And user clicks on the add to cart button
             When clicks on the shoppingcart link
             Then  user should be able to see the selected product in the cart
             
              