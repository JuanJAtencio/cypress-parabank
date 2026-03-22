describe("Interceptar y simular solicitudes", () => {
    it("Intercepta y simula busqueda en google", () => {
        cy.intercept("GET, https://www.google.com/search* ", {
            statusCode: 200,
            body: '<html><body><h1><simulado respuesta de google</h1/body></html>'
        }).as('searchGoogle')

        cy.visit("https://www.google.com")
        cy.get('#APjFqb').type("Cypress intercept example{Enter}")
        cy.wait("@searchGoogle")
        cy.contains("simulado respuesta de google").should("exist")

    })

})





