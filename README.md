### Playwright with Jest Test Automation Framework

Design Page Objects and run Tests using JavaScript 

### Run application

Clone the repository 
 
```bash
git clone https://github.com/JayKishoreDuvvuri/Playwright-Jest-Test-Automation-Framework
``` 

Install dependencies
 
```bash
Install Node modules: npm i
```

Run test

```bash
npm test
```

Folder Structure
 
    ├── ...
    │
    ├── pages                               # Generic functionality for tests
    │   |
    │   ├── basePage.js                     # Base page testing functionality
    │   ├── landingPage.js                  # Landing page testing functionality
    │   ├── addToCartPage.js                # Add To Cart page testing functionality
    │   ├── productPage.js                  # Product page testing functionality
    │
    ├── tests                               # Test suite
    │    ├── addToCart.test.js              # Automated Test Script     
    │    ├── productNames.test.js           # Automated Test Script
    │    ├── toggleProductColour.test.js    # Automated Test Script
    │
    │
    │── config.js                           # Confiuguration JavSacript File
    │
    │
    ├── pageobjects                       
    │    ├──selectors.js                    # HTML and CSS identifier for elements to test
    │               
    │
    └─── html-test-report   
              ├──test-report.html           #  Test report of for the tests executed


To View HTML Report

```bash
html-test-report :
        |
        ├── test-report.html - Right Click and Reveal in File Explorer (OR) Finder     
```

