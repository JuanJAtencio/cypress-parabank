// cypress/pages/LoginPage.js

class LoginPage {

  // --- Selectores (un solo lugar, fácil de mantener) ---
  get usernameInput()  { return cy.get('input[name="username"]') }
  get passwordInput()  { return cy.get('input[name="password"]') }
  get loginButton()    { return cy.get('input[value="Log In"]') }
  get errorMessage()   { return cy.contains('Error!') }
  get successTitle()   { return cy.contains('Accounts Overview') }

  // --- Acciones ---
  visit() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
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

  // --- Flujo completo ---
  login(username, password) {
    this.fillUsername(username)
    this.fillPassword(password)
    this.submit()
  }

  // --- Validaciones ---
  validarLoginExitoso() {
    this.successTitle.should('be.visible')
  }

  validarLoginFallido() {
    this.errorMessage.should('be.visible')
  }
}

export default new LoginPage()