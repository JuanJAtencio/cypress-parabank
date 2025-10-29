//Verificar carga de la pagina

describe('Parabank - smoke test', () => {
  it('Carga la pagina principal', () => {
  cy.visit('https://parabank.parasoft.com/parabank') 
  cy.title().should('contain', 'ParaBank')
  cy.get('h2').contains('Customer Login')

  })

})

//Login Fallido

describe('ParaBank - Login fallido', () => {
  it('Muestra mensaje de error con credenciales incorrectas', () => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.get('input[name="username"]').type('usuarioInexistente')
    cy.get('input[name="password"]').type('clave123')
    cy.get('input[type="submit"]').click()
    cy.get('#rightPanel').should('contain', 'Error')
  
})
})


//Registro de nuevo usuario

describe('Parabank - registro',() => {
  it('Permite registrar un nuevo usuario', () => {
    const user = ' user' + Date.now()
    const pass = 'Password123'

    cy.visit('https://parabank.parasoft.com/parabank')
    cy.contains('Register').click()
  
    cy.get('#customerForm input[name="customer.firstName"]').type('Juan')
    cy.get('#customerForm input[name="customer.lastName"]').type('Tester')
    cy.get('#customerForm input[name="customer.address.street"]').type('Calle Falsa 123')
    cy.get('#customerForm input[name="customer.address.city"]').type('Buenos Aires')
    cy.get('#customerForm input[name="customer.address.state"]').type('BA')
    cy.get('#customerForm input[name="customer.address.zipCode"]').type('1000')
    cy.get('#customerForm input[name="customer.phoneNumber"]').type('111222333')
    cy.get('#customerForm input[name="customer.ssn"]').type('12345678')
    cy.get('#customerForm input[name="customer.username"]').type(user)
    cy.get('#customerForm input[name="customer.password"]').type(pass)
    cy.get('#customerForm input[name="repeatedPassword"]').type(pass)

    cy.get('input[value="Register"]').click()
    cy.get('#rightPanel').should('contain', 'Welcome')

})

})


//Login exitoso y logout

describe('Parabank - login exitoso y logout', () => {
  it('Permite registrar, iniciar sesión y cerrar sesión correctamente', () => {
    const username = 'user' + Date.now()
    const password = 'Password123'

    // --- Registrar usuario ---
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.contains('Register').click()

    cy.get('#customerForm input[name="customer.firstName"]').type('Juan')
    cy.get('#customerForm input[name="customer.lastName"]').type('Tester')
    cy.get('#customerForm input[name="customer.address.street"]').type('Calle 123')
    cy.get('#customerForm input[name="customer.address.city"]').type('Buenos Aires')
    cy.get('#customerForm input[name="customer.address.state"]').type('BA')
    cy.get('#customerForm input[name="customer.address.zipCode"]').type('1000')
    cy.get('#customerForm input[name="customer.phoneNumber"]').type('111222333')
    cy.get('#customerForm input[name="customer.ssn"]').type('12345678')
    cy.get('#customerForm input[name="customer.username"]').type(username)
    cy.get('#customerForm input[name="customer.password"]').type(password)
    cy.get('#customerForm input[name="repeatedPassword"]').type(password)

    cy.get('input[value="Register"]').click()
    cy.get('#rightPanel').should('contain', 'Welcome')

    // --- Esperar un poco para que se guarde el usuario ---
    cy.wait(2000)

    // --- Logout ---
    cy.contains('Log Out').click()

    // --- Login ---
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('input[type="submit"]').click()

    // --- Verificar login exitoso ---
    cy.url({ timeout: 10000 }).should('include', '/overview')
    cy.contains('Accounts Overview').should('be.visible')

    // --- Logout final ---
    cy.contains('Log Out').click()
    cy.get('h2').should('contain', 'Customer Login')
  })
})


//Transferencia de fondos

describe('Parabank - transferencia', () => {
  const username = 'john'
  const password = 'demo'

  beforeEach(() => {
    cy.visit('https://parabank.parasoft.com/parabank')
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('input[type="submit"]').click()
    cy.url().should('include', '/overview')
  })

  it('Permite transferir fondos entre cuentas', () => {
    cy.contains('Transfer Funds').click()
    cy.get('input#amount').type('100')
    cy.get('select#fromAccountId').select(0)
    cy.get('select#toAccountId').select(1)
    cy.get('input[type="submit"]').click()
    cy.get('#rightPanel').should('contain', 'Transfer Complete')
  })
})

