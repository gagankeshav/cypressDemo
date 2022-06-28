/* Contains a set of specifications to be evaluated*/
describe('Login', () => {
	before(function() {

		// Navigating to a URL in a web application
		cy.visit('http://zero.webappsecurity.com/index.html')

		// Assertion on a web URL using "include"
		cy.url().should('include', 'index.html')

		// Interacting with elements on the UI using cy.get()
		cy.get('#signin_button').click()
	})

	it('should try to login with invalid data', () => {
		cy.get('#user_login').type('invalid username')
		cy.get('#user_password').type('invalid password')
		cy.get('#user_remember_me').click()
		cy.contains('Sign in').click()
	})

	/* Examples covered:
	1. Using class tags
	2. Chaining Assertions
	3. Screenshotting
	*/
	it('should display error message', () => {
		cy.get('.alert-error')
			.should('be.visible')
			.and('contain', 'Login and/or password are wrong')
		cy.screenshot({capture: 'fullPage'})
	})

	/* Examples covered
	1. Consuming Fixtures
	2. -----------------------------------------------
	*/
	it('should login to application', () => {
		cy.fixture('user').then(user => {
			cy.get('#user_login').type(user.id)
			cy.get('#user_password').type(user.pwd)
			cy.get('#user_remember_me').click()
			cy.contains('Sign in').click()
		})
		cy.get('ul.nav-tabs').should('be.visible')
	})
})

describe("Transactions", () => {
	beforeEach(function() {
		cy.fixture('user').then(user => {
			cy.login(user.id, user.pwd)
		})
	})
	/* Examples covered:
	1. How to use lists
	2. How to type into the elements
	3. How to perform delayed typing
	4. Value based assertions
	*/
	it('should fill transfer funds form', () => {
		cy.get('#transfer_funds_tab').click()
		cy.get('#tf_fromAccountId').select('2')
		cy.get('#tf_toAccountId').select('4')
		cy.get('#tf_amount').type('1000')
		cy.get('#tf_description').type('just some text', {delay: 50})
		cy.get('#btn_submit').click()
		cy.get('#tf_fromAccountId').should('have.value', 'Checking')
		cy.get('#tf_toAccountId').should('have.value', 'Loan')
		cy.get('#tf_amount').should('have.value', '1000')
	})

	/* Examples covered:
	1. Item count validation
	2. Using custom tags and "contains"
	*/
	it('should filter transactions', () => {
		cy.get('#account_activity_tab').click()
		cy.contains('Find Transactions').click()
		cy.get('#aa_fromAmount').type('200')
		cy.get('#aa_toAmount').type('1000')
		cy.get('button[type="submit"]').click()
		cy.get('#filtered_transactions_for_account').should('be.visible')
		cy.get('tbody > tr')
			.its('length')
			.should('be.gt', 0)
	})

	/* Example covered: Simulating keyboard actions */
	it('should type into searchbox and submit with pressing enter', () => {
		cy.get('#searchTerm').type('some text {enter}')
	})
})