describe("Test Pages", () => {
  it("Home", () => {
    cy.visit("")
    cy.contains("Book Online Adelaide.")
    cy.contains("Book Online Woodville.")
    cy.contains("We are a team of industry leaders")
    cy.contains("We prioritise your eye health")
    cy.contains("Follow us on Instagram and Facebook")
  })

  it("Who We Are Page", () => {
    cy.visit("")
    cy.contains("Who We Are").click()
    cy.contains("Meet the team")
    cy.contains("Our Optometrists are industry leaders")
  })

  it("What We Do", () => {
    cy.visit("")
    cy.contains("What We Do").click()
    cy.contains("We do things a little differently here")
  })

  it("Patient Resources", () => {
    cy.visit("")
    cy.contains("Patient Resources").click()
    cy.contains("Your eye care routine will often involve at-home care ")
  })

  it("Blog", () => {
    cy.visit("")
    cy.contains("Blog").click()
    cy.contains(
      "The optometrists of Innovative Eye Care have a wide scope of expertise"
    )
  })

  it("Blog Post", () => {
    cy.visit("")
    cy.contains("Blog").click()
    cy.contains("Macula Month 2020").click({ force: true })
    cy.contains(
      "Macular Month is about reminding us of the importance of eye health"
    )
    cy.contains("Millie Meegan")
    cy.contains("28/05/2020")
  })

  it("Contact", () => {
    cy.visit("")
    cy.contains("Contact").click()
    cy.contains("Adelaide")
    cy.contains("60 Hutt Street")
    cy.contains("(08) 8231 9341")
    cy.contains("Book Online")

    cy.contains("Woodville")
    cy.contains("850 Port Road")
    cy.contains("(08) 8445 9050")
    cy.contains("Book Online")
  })
})
