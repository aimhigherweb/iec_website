describe("Test Search", () => {
  it("Search", () => {
    cy.visit("index-old")
    cy.get(".search-input").type("Macula").should("have.value", "Macula")
    cy.get(".search-button").click()
    cy.contains("Macular Degeneration")
  })
})
