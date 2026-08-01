// cypress/pages/TransferPage.js

class TransferPage {

  // --- Selectores ---
  get transferLink()    { return cy.contains('Transfer Funds') }
  get amountInput()     { return cy.get('input[id="amount"]') }
  get fromAccount()     { return cy.get('select[id="fromAccountId"]') }
  get toAccount()       { return cy.get('select[id="toAccountId"]') }
  get submitButton()    { return cy.get('input[value="Transfer"]') }
  get successMessage()  { return cy.contains('Transfer Complete!') }

  // --- Acciones ---
  visit() {
    this.transferLink.click()
  }

  transferir(monto) {
    this.amountInput.type(monto)
    this.fromAccount.select(0)
    this.toAccount.select(1)
    this.submitButton.click()
  }

  // --- Validaciones ---
  validarTransferenciaExitosa() {
    this.successMessage.should('be.visible')
  }

  validarTransferenciaFallida() {
    cy.contains('Please enter a valid amount').should('exist')
  }

}

export default new TransferPage()