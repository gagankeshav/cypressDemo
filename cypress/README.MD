
# Setup
To start off, use the below command to initiate a new project:
**`npm init`**

Once all the values are entered and saved, a ***package.json*** file will be created automatically

### Use below mentioned command to install Cypress:
**`npm install cypress`**

After above command is executed, a ***node_modules*** folder will be created in the project which will contain all the dependencies of the project and a ***package-lock.json*** file will also be created that will contain JSON for all the dependencies.

A new entry will also be added to the original ***package.json*** files with the key dependencies which will contain all the dependencies for the project.

### To open Cypress test runner window:
**`npx cypress open`**

When opening this for the first time, it will create the cypress folder for you with basic, as well as advanced test examples to help you learn as you code. If not needed, please select below option from the screen:
**No thanks, delete files**

Custom commands can be added to interact with Cypress in **package.json** file under the scripts property:
### Open Cypress:
**`cy:open : cypress open`**

### Run Cypress:
Helps to run the tests in headless mode on the terminal
**`cy:run : cypress run`**

### Run Individual Spec Files:
npx cypress run --spec 'cypress/integration/<path to spec file>'

## Folder Structure/Critical Files
**fixtures:** configuration files used to store data to be used in the tests and for stubbing
**integration:** contains all our test files
**plugins:** index.js file used to integrate third party plugins such as blink-diff for visual regression testing or Cucumber
**support:** index.js file in here runs before everything, can be used to load everything before the test starts. Can also be used to define custom commands or override existing commands using the commands.js file
**Cypress.json:** file stores all the configuration related to cypress

### Sample Configuration:
Some useful configurations for Cypress.json file:

    {
	    "baseUrl": "",
		"watchForFileChanges": false,
		"viewportWidth": 1920,
		"viewportHeight": 1080,
		"defaultCommandTimeout": 5000,
		"pageLoadTimeout": 60000,
		"video": false,
    }

# Useful Tips

### Taking Screenshots:

    cy.screenshot({capture: 'fullPage'})

### Hooks:
    before(function() {})
    after(function() {})
    beforeEach(function {})
    afterEach(function {})
