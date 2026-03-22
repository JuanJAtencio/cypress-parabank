import LoginPage from '../pages/LoginPage'

describe('Login Parabank', () => {

  it('Login fallido', () => {
    LoginPage.visitar()
    LoginPage.escribirUsuario('usuarioFake')
    LoginPage.escribirPassword('1234')
    LoginPage.clickLogin()

    LoginPage.validarLoginFallido()
  })

})