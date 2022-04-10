describe("Tests for Who We Are.", function () {

  beforeEach(function () {
    cy.fixture("servicedata").then(function (data) {
      this.data = data
    })
  })

  it("Visits What We Do.", function () {
    var servicedata = this.data
    cy.visit("")
    cy.get('[data-cy="menu"]').should("be.visible").click()
    cy.contains("What We Do").should("be.visible").click()
    cy.url().should('eq', 'http://localhost:8000/what-we-do')
    cy.contains("What We Do")

    //cheking the service categories 
    cy.fixture("servicedata").then((servicedata) => {
      servicedata.forEach((serdata) => {
        var service = serdata.service
        cy.get('[data-cy="what-service"]').contains(service)
      })
    })
  })
})