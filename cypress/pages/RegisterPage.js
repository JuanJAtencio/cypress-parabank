class RegisterPage {
  get firstNameInput()  { return cy.get('input[name="customer.firstName"]') }
  get lastNameInput()   { return cy.get('input[name="customer.lastName"]') }
  get addressInput()    { return cy.get('input[name="customer.address.street"]') }
  get cityInput()       { return cy.get('input[name="customer.address.city"]') }
  get stateInput()      { return cy.get('input[name="customer.address.state"]') }
  get zipInput()        { return cy.get('input[name="customer.address.zipCode"]') }
  get phoneInput()      { return cy.get('input[name="customer.phoneNumber"]') }
  get ssnInput()        { return cy.get('input[name="customer.ssn"]') }
  get usernameInput()   { return cy.get('input[name="customer.username"]') }
  get passwordInput()   { return cy.get('input[name="customer.password"]') }
  get confirmInput()    { return cy.get('input[name="repeatedPassword"]') }
  get submitButton()    { return cy.get('input[value="Register"]') }
  get logoutLink()      { return cy.contains('Log Out') }
  get registerLink()    { return cy.contains('Register') }

  irARegistro() {
    this.registerLink.click()
  }

  completarFormulario(user) {
    this.firstNameInput.type(user.nombre)
    this.lastNameInput.type(user.apellido)
    this.addressInput.type(user.direccion)
    this.cityInput.type(user.ciudad)
    this.stateInput.type(user.estado)
    this.zipInput.type(user.zip)
    this.phoneInput.type(user.telefono)
    this.ssnInput.type(user.ssn)
    this.usernameInput.type(user.username)
    this.passwordInput.type(user.password)
    this.confirmInput.type(user.password)
  }

  enviar() {
    this.submitButton.click()
  }

  register(user) {
    this.completarFormulario(user)
    this.enviar()
  }

  validarRegistroExitoso(username) {
    cy.get('#rightPanel').should('contain', `Welcome ${username}`)
    this.logoutLink.should('be.visible')
  }

}

export default new RegisterPage()
