describe("Test Home Page", function () {

  //Use the cy.fixture() method to pull data from fixture file
  beforeEach(function () {
    cy.fixture("essentialdata").then(function (data) {
      this.data = data
    })
  })


  it("Visits Home. Checks the booking button, phone number and address", function () {
    cy.visit("")
    cy.get('[data-cy="menu"]').should("be.visible").click()



    cy.contains("Home").should("be.visible").click()
    // essential data in between pages
    cy.contains("We are a team of industry leaders")

    //checking the team services
    cy.contains("p", "EYEWEAR")
    cy.contains("p", "BESPOKE")
    cy.contains("p", "PAEDIATRIC")
    cy.contains("p", "DRY EYE")
    cy.contains("p", "ADVANCED")
    cy.contains("p", "ORTHO-K")

    cy.contains("We prioritise your eye health")

    cy.contains(this.data.AddressAdelaide)
    cy.contains(this.data.TelephoneAdelaide)
    cy.contains(this.data.AddressWoodville)
    cy.contains(this.data.TelephoneWoodville)

    cy.contains("Newsletter")
    cy.get('[data-cy="newsletter-input-name"]').should("be.visible").type("Jake")
    cy.get('[data-cy="newsletter-input-email"]').should("be.visible").type("Jake@eye.space")



    cy.contains("Subscribe")
    cy.contains("Follow us on Instagram and Facebook")

    cy.get('[data-cy="booking"]').should("be.visible").click()
    cy.get('[placeholder="Search now."]').should("be.visible").type("London")
    cy.get('[data-cy="search-icon-close"]').eq(1).should("be.visible").click()

  })


})

