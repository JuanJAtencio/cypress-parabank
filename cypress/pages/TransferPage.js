class TransferPage {
  get transferLink()   { return cy.contains('Transfer Funds') }
  get amountInput()    { return cy.get('input[id="amount"]') }
  get fromAccount()    { return cy.get('select[id="fromAccountId"]') }
  get toAccount()      { return cy.get('select[id="toAccountId"]') }
  get submitButton()   { return cy.get('input[value="Transfer"]') }
  get successMessage() { return cy.contains('Transfer Complete!') }

  visit() { this.transferLink.click() }

  transferir(monto) {
    this.amountInput.clear().type(monto)
    this.fromAccount.find('option').should('have.length.at.least', 2)
    this.fromAccount.then($select => {
      const fromAccountId = $select.find('option').eq(0).val()
      const toAccountId = $select.find('option').eq(1).val()

      this.fromAccount.select(fromAccountId)
      this.toAccount.select(toAccountId)
    })
    this.submitButton.click()
  }

  validarTransferenciaExitosa() { this.successMessage.should('be.visible') }
}

export default new TransferPage()
