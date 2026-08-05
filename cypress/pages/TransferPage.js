class TransferPage {
  get transferLink()   { return cy.contains('Transfer Funds') }
  get amountInput()    { return cy.get('input[id="amount"]') }
  get fromAccount()    { return cy.get('select[id="fromAccountId"]') }
  get toAccount()      { return cy.get('select[id="toAccountId"]') }
  get submitButton()   { return cy.get('input[value="Transfer"]') }
  get successMessage() { return cy.contains('Transfer Complete!') }

  visit() { this.transferLink.click() }

  transferir(monto) {
    this.amountInput.type(monto)
    cy.get('select[id="fromAccountId"] option', { timeout: 10000 })
      .should('have.length.at.least', 1)
    cy.get('select[id="fromAccountId"]').then($sel => {
      const val = $sel.find('option').eq(0).val()
      cy.wrap($sel).select(val)
      cy.get('select[id="toAccountId"]').select(val)
    })
    this.submitButton.click()
  }

  validarTransferenciaExitosa() { this.successMessage.should('be.visible') }
  validarTransferenciaFallida() { cy.contains('Please enter a valid amount').should('exist') }
}

export default new TransferPage()