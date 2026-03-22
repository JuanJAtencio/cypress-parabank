




class LoginPage {

  visitar() {
    cy.visit('https://parabank.parasoft.com/parabank/index.htm')
  }

  escribirUsuario(usuario) {
    cy.get('input[name="username"]').type(usuario)
  }

  escribirPassword(password) {
    cy.get('input[name="password"]').type(password)
  }

  clickLogin() {
    cy.get('input[value="Log In"]').click()
  }

  validarLoginExitoso() {
    cy.contains('Accounts Overview').should('be.visible')
  }

  validarLoginFallido() {
    cy.contains('Error!').should('be.visible')
  }
}

export default new LoginPage()