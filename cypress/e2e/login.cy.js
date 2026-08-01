import LoginPage from '../pages/LoginPage'

describe('Login Parabank', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('Login fallido con credenciales incorrectas', () => {
    LoginPage.login('usuarioFake', '1234')
    LoginPage.validarLoginFallido()
  })

  it('Login exitoso', () => {
    LoginPage.login('john', 'demo')
    LoginPage.validarLoginExitoso()
  })

})