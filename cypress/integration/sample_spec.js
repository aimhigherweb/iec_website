describe("Test Pages", () => {
    it("Visits Home. Checks the booking button, phone number and address", () => {
      cy.visit("")
      
      cy.contains("60 Hutt Street")
      cy.contains("(08) 8231 9341")
      cy.contains("850 Port Road")
      cy.contains("(08) 8445 9050")
      cy.contains("We are a team of industry leaders")
      cy.contains("We prioritise your eye health")
      cy.contains("Follow us on Instagram and Facebook")
      cy.contains("Book Adelaide").click()
      cy.contains("Book Woodville.").click()
    })
 
    it("Who We Are Page", () => {
      cy.visit("/who-we-are")

      cy.contains("60 Hutt Street")
      cy.contains("(08) 8231 9341")
      cy.contains("850 Port Road")
      cy.contains("(08) 8445 9050")
      cy.contains("Meet the team")
      cy.contains("Our Optometrists are industry leaders")
      cy.contains("Book Adelaide").click()
      cy.contains("Book Woodville.").click()
    })
  
    it("What We Do", () => {
      cy.visit("what-we-do")

      cy.contains("60 Hutt Street")
      cy.contains("(08) 8231 9341")
      cy.contains("850 Port Road")
      cy.contains("(08) 8445 9050")
      cy.contains("We do things a little differently here")
      cy.contains("Book Adelaide").click()
      cy.contains("Book Woodville.").click()
    })
  
    it("Patient Resources", () => {
      cy.visit("/patient-resources")

      cy.contains("60 Hutt Street")
      cy.contains("(08) 8231 9341")
      cy.contains("Your eye care routine will often involve at-home care ")
      cy.contains("Book Adelaide").click()
      cy.contains("Book Woodville.").click()
    })
  
    it("Blog", () => {
      cy.visit("/blog")

      cy.contains("60 Hutt Street")
      cy.contains("(08) 8231 9341")
      cy.contains("The optometrists of Innovative Eye Care have a wide scope of expertise")
      cy.contains("Book Adelaide").click()
      cy.contains("Book Woodville.").click()
    })
  
    it("Blog Post", () => {
      cy.visit("/blog")

      cy.contains("60 Hutt Street")
      cy.contains("(08) 8231 9341")
      cy.contains("850 Port Road")
      cy.contains("(08) 8445 9050")
      cy.contains("Macula Month 2020").click({ force: true })
      cy.contains("Macular Month is about reminding us of the importance of eye health")
      cy.contains("Millie Meegan")
      cy.contains("28/05/2020")
      cy.contains("book online").click()
    })
  
    it("Contact", () => {
      cy.visit("/contact")

      cy.contains("Adelaide")
      cy.contains("60 Hutt Street")
      cy.contains("(08) 8231 9341")
      cy.contains("Book Online")

  
      cy.contains("Woodville")
      cy.contains("850 Port Road")
      cy.contains("(08) 8445 9050")
      cy.contains("Book Online")
      cy.contains("Book Adelaide").click()
      cy.contains("Book Woodville.").click()

    })
  })
  