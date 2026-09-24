import RegisterPage from '../pages/RegisterPage'
import LoginPage from '../pages/LoginPage'

describe('Registro de cliente', () => {

  it('Registra un cliente con datos válidos', () => {
    cy.fixture('profile').then((profile) => {

      const user = {
        nombre   : profile.firstName,
        apellido : profile.lastName,
        direccion: profile.address,
        ciudad   : profile.city,
        estado   : profile.state,
        zip      : profile.zip,
        telefono : profile.phone,
        ssn      : profile.ssn,
        username : 'user' + Date.now(),
        password : profile.password
      }

      LoginPage.visit()
      RegisterPage.irARegistro()
      RegisterPage.register(user)
      RegisterPage.validarRegistroExitoso(user.username)

    })
  })

})
