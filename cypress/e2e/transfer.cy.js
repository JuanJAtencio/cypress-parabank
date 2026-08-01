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

})