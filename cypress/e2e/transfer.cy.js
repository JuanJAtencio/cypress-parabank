import LoginPage from '../pages/LoginPage'
import TransferPage from '../pages/TransferPage'

describe('Transferencia de fondos', () => {

  beforeEach(() => {
    cy.fixture('users').then((users) => {
      LoginPage.visit()
      LoginPage.login(users.validUser.username, users.validUser.password)
    })
  })

  it('Transferencia exitosa entre cuentas', () => {
    cy.fixture('transfer').then((data) => {
      TransferPage.visit()
      TransferPage.transferir(data.validTransfer.amount)
      TransferPage.validarTransferenciaExitosa()
    })
  })

  it('Transferencia fallida con monto cero', () => {
    cy.fixture('transfer').then((data) => {
      TransferPage.visit()
      TransferPage.transferir(data.invalidTransfer.amount)
      TransferPage.validarTransferenciaFallida()
    })
  })

  it('Verifica que la request de transferencia se envía al servidor', () => {
    cy.fixture('transfer').then((data) => {

      cy.intercept('POST', '**/transfer**').as('transferRequest')

      TransferPage.visit()
      TransferPage.transferir(data.validTransfer.amount)

      cy.wait('@transferRequest').then((interception) => {
        expect(interception.response.statusCode).to.eq(200)
      })

      TransferPage.validarTransferenciaExitosa()
    })
  })

})