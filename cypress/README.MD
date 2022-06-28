To start off, use the below command to initiate a new project:
npm init

Once all the values are entered and saved, a package.json file will be created automatically

Use below mentioned command to install Cypress:
npm install cypress

After above command in executed, a node_modules folder will be created in the project which will contain all the dependencies of the project and a package-lock.json file will also be created that will contain JSON for all the dependencies.

A new entry will also be added to the original package.json files with the key dependencies which will contain all the dependencies for the project.

===============================================
To open Cypress test runner window:
npx cypress open

When opening this for the first time, it will create the cypress folder for you with basic as well as advanced test examples to help you learn as you code
No thanks, delete files [Added in Cypress 8]
Can add custom commands to interact with Cypress in package.json file under the scripts property:
cy:open : cypress open
cy:run : cypress run [helps to run the tests in headless mode on the terminal]

To run an individual file in headless mode, use below mentioned command:
npx cypress run --spec 'cypress/integration/<path to spec file>'
===============================================
Folder Structure:
fixtures: configuration files used to store data to be used in the tests and for stubbing
integration: contains all our test files
plugins: index.js file used to integrate third party plugins such as blink-diff for visual regression testing or Cucumber
support: index.js file in here runs before everything, can be used to load everything before the test starts. Can also be used to define custom commands or override existing commands using the commands.js file
Cypress.json file stores all the configuration related to cypress

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

For taking screenshots, use below mentioned commands:
cy.screenshot({capture: 'fullPage'}) -> for capturing full page

Hooks:
before(function() {})
after(function() {})
beforeEach(function {})
afterEach(function {})
it.skip is used for skipping a particular test
it.only is used for running only a particular test
cy.pause
===============================================
For elements, use as follows:

. for class names [partial class names can also be used directly]

# for id's

cy.contains can also be used in case of a unique value attribute

type of the element can be used as follows:

cy.get('input[type="checkbox]"') which means the tag of the element and then it's type
===============================================
XPath support:
npm install cypress-xpath

Add below in the index.js file:
require('cypress-xpath')

Can be used in the tests as follows:
cy.xpath()