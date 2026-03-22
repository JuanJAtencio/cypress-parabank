class RegisterPage {

  irARegistro() {
    cy.contains('Register').click()
  }

  completarFormulario(user) {
    cy.get('input[name="customer.firstName"]').type(user.nombre)
    cy.get('input[name="customer.lastName"]').type(user.apellido)

    cy.get('input[name="customer.address.street"]').type(user.direccion)
    cy.get('input[name="customer.address.city"]').type(user.ciudad)
    cy.get('input[name="customer.address.state"]').type(user.estado)
    cy.get('input[name="customer.address.zipCode"]').type(user.zip)
    cy.get('input[name="customer.phoneNumber"]').type(user.telefono)
    cy.get('input[name="customer.ssn"]').type(user.ssn)

    cy.get('input[name="customer.username"]').type(user.username)
    cy.get('input[name="customer.password"]').type(user.password)
    cy.get('input[name="repeatedPassword"]').type(user.password)
  } 

  enviar() {
    cy.get('input[value="Register"]').click()
  }

  validarRegistroExitoso() {
    cy.contains('Log Out').should('be.visible')
  }

}

export default new RegisterPage()