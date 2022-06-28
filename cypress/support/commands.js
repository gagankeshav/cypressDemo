Cypress.Commands.add('login', (username, password) => {
    cy.visit('http://zero.webappsecurity.com/index.html')

    // Interacting with elements on the UI using cy.get()
    cy.get('#signin_button').click()

    cy.get('#user_login').type(username)
    cy.get('#user_password').type(password)
    cy.get('#user_remember_me').click()
    cy.contains('Sign in').click()
})
