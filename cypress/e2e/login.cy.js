import LoginPage from '../pages/LoginPage'

describe('Login Parabank', () => {

  beforeEach(() => {
    LoginPage.visit()
  })

  it('Login fallido con credenciales incorrectas', () => {
    cy.fixture('users').then((users) => {
      LoginPage.login(users.invalidUser.username, users.invalidUser.password)
      LoginPage.validarLoginFallido()
    })
  })

  it('Login exitoso', () => {
    cy.fixture('users').then((users) => {
      LoginPage.login(users.validUser.username, users.validUser.password)
      LoginPage.validarLoginExitoso()
    })
  })

})