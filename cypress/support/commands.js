Cypress.Commands.add('login', (username, password) => {
  cy.visit('/index.htm')
  cy.get('input[name="username"]').clear().type(username)
  cy.get('input[name="password"]').clear().type(password, { log: false })
  cy.get('input[value="Log In"]').click()
})
