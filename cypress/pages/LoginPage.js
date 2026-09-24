class LoginPage {
  get usernameInput()  { return cy.get('input[name="username"]') }
  get passwordInput()  { return cy.get('input[name="password"]') }
  get loginButton()    { return cy.get('input[value="Log In"]') }
  get errorMessage()   { return cy.get('#rightPanel').contains('Error!') }
  get successTitle()   { return cy.get('#rightPanel').contains('Accounts Overview') }

  visit() {
    cy.visit('/index.htm')
  }

  fillUsername(username) {
    this.usernameInput.clear().type(username)
  }

  fillPassword(password) {
    this.passwordInput.clear().type(password)
  }

  submit() {
    this.loginButton.click()
  }

  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  validarLoginExitoso() {
    cy.url().should('include', '/overview.htm')
    this.successTitle.should('be.visible')
  }

  validarLoginFallido() {
    this.errorMessage.should('be.visible')
  }
}

export default new LoginPage()
