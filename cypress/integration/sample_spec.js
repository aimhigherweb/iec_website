import myData from "../../fixtures/kbCategories.json"

describe("Test Pages", () => {
    it("Visits Home. Checks the booking button, phone number and address", () => {
        cy.visit("")

        //checking the navigation bar working
        cy.get('#gatsby-focus-wrapper').find('img').should('have.attr', 'src','/images2/icon-logo.png').eq(1).click("")
        cy.contains("Home").click("")
        
        // cy.get('div.MainHeader.Menu').click(140,82)

        cy.contains("We are a team of industry leaders")
        cy.contains("We prioritise your eye health")

        cy.contains("60 Hutt Street")
        cy.contains("(08) 8231 9341")
        cy.contains("850 Port Road")
        cy.contains("(08) 8445 9050")
    
        //checking the working of subscribe button
        cy.get('#fieldName').type("abc")
        cy.get('#fieldEmail').type("abc.gmail.com")
        cy.contains("Subscribe")
        
        cy.contains("Follow us on Instagram and Facebook")
       
        //checking the working of the search button by typing input text
        cy.get('[placeholder="Search now."]').click().type("aa")
        .invoke('show')
       
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

        //now at who we are page
        //checking the navigation bar working
        cy.get('#gatsby-focus-wrapper').find('img').should('have.attr', 'src','/images2/icon-logo.png').eq(1).click("")
        cy.contains("Who We Are").click("")
        cy.contains("Meet the team")

        //check image in the staff bar
        cy.get('#gatsby-focus-wrapper').find('img').should('have.attr', 'src','/images2/icon-logo.png').eq(2).click("")

        //click on lachie's eimage and test whether the description of staff is showing after clicking
        //cy.get('div.who-we-are__TeamStaffBar-eucGBo.ipKRVy').click(14,110)
        cy.contains("Lachlan Hoy is a second generation Optometrist who graduated from the Queensland University of Technology with Honours in 2007.")

        //checking the working of subscribe button
        cy.get('#fieldName').type("abc")
        cy.get('#fieldEmail').type("abc.gmail.com")
        cy.contains("Subscribe")

        //checking the working of the search button by typing input text
        cy.get('[placeholder="Search now."]').click().type("aa")
        .invoke('show')
        cy.contains("Book Adelaide").click()
        cy.contains("Book Woodville.").click()
    })
  
    it("What We Do", () => {
        cy.visit("what-we-do")

       //now at who we are page
        //checking the navigation bar working
        cy.get('#gatsby-focus-wrapper').find('img').should('have.attr', 'src','/images2/icon-logo.png').eq(1).click("")
        cy.contains("What We Do").click("")
        

        cy.contains("60 Hutt Street")
        cy.contains("(08) 8231 9341")
        cy.contains("850 Port Road")
        cy.contains("(08) 8445 9050")
        cy.contains("We do things a little differently here")
        
        

        //checking the working of subscribe button
        cy.get('#fieldName').type("abc")
        cy.get('#fieldEmail').type("abc.gmail.com")
        cy.contains("Subscribe")

        //checking the working of the search button by typing input text
        cy.get('[placeholder="Search now."]').click().type("aa")
        .invoke('show')
        

        cy.contains("Book Adelaide").click()
        cy.contains("Book Woodville.").click()
    })
  
    it("Patient Resources", () => {
        cy.visit("/patient-resources")

        cy.contains("60 Hutt Street")
        cy.contains("(08) 8231 9341")
        cy.contains("850 Port Road")
        cy.contains("(08) 8445 9050")
        
        //checking the navigation bar working
        cy.get('#gatsby-focus-wrapper').find('img').should('have.attr', 'src','/images2/icon-logo.png').eq(1).click("")
        cy.contains("Patient Resources").click("")
        

        cy.contains("Your eye care routine will often involve at-home care ")

        //checking the working of subscribe button
        cy.get('#fieldName').type("abc")
        cy.get('#fieldEmail').type("abc.gmail.com")
        cy.contains("Subscribe")

        //checking the working of the search button by typing input text
        cy.get('[placeholder="Search now."]').click().type("aa")
        .invoke('show')

        cy.contains("Book Adelaide").click()
        cy.contains("Book Woodville.").click()
    })
  
    it("Blog", () => {
        cy.visit("/blog")

        cy.contains("60 Hutt Street")
        cy.contains("(08) 8231 9341")
        

        //checking if the navigation bar options are getting selected
        cy.get('#gatsby-focus-wrapper').find('img').should('have.attr', 'src','/images2/icon-logo.png').eq(1).click("")
        cy.contains("Blog").click("")
        cy.contains("The optometrists of Innovative Eye Care have a wide scope of expertise")
        
        //checking the working of subscribe button
        cy.get('#fieldName').type("abc")
        cy.get('#fieldEmail').type("abc.gmail.com")
        cy.contains("Subscribe")

        //checking the working of the search button by typing input text
        cy.get('[placeholder="Search now."]').click().type("aa")
        .invoke('show')

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
        cy.contains("book online")
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

        //checking if the navigation bar options are getting selected
        //now at who we are page
        cy.get('#gatsby-focus-wrapper').find('img').should('have.attr', 'src','/images2/icon-logo.png').eq(1).click("")
        cy.contains("Contact").click("")

        //checking the working of subscribe button
        cy.get('#fieldName').type("abc")
        cy.get('#fieldEmail').type("abc.gmail.com")
        cy.contains("Subscribe")


        //checking the working of the search button by typing input text
        cy.get('[placeholder="Search now."]').click().type("aa")
        .invoke('show')
        
        cy.contains("Book Adelaide").click()
        cy.contains("Book Woodville.").click()

    })
  })