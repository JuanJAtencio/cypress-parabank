// cypress/e2e/transfer.cy.js
import LoginPage from '../pages/LoginPage'
import TransferPage from '../pages/TransferPage'

describe('Transferencia de fondos', () => {

  beforeEach(() => {
    LoginPage.visit()
    LoginPage.login('john', 'demo')
  })

  it('Transferencia exitosa entre cuentas', () => {
    TransferPage.visit()
    TransferPage.transferir('100')
    TransferPage.validarTransferenciaExitosa()
  })

})