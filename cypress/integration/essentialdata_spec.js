describe("Test Pages", function () {
  //Use the cy.fixture() method to pull data from fixture file
  beforeEach(function () {
    cy.fixture("essentialdata").then(function (data) {
      this.data = data
    })
  })

  it("Visits Home. Checks the booking button, phone number and address", function () {
    cy.visit("")

    //checking the navigation bar working
    cy.get("#gatsby-focus-wrapper")
      .find("img")
      .should("have.attr", "src", "/images2/icon-logo.png")
      .eq(1)
      .click("")
    cy.contains("Who We Are")
    cy.contains("What We Do")
    cy.contains("Patient Resources")
    cy.contains("Blog")
    cy.contains("Contact")
    cy.contains("Shop")
    cy.contains("Home").click()

    //essential data in between pages
    cy.contains("We are a team of industry leaders")

    //checking the team services
    cy.contains("p", "EYEWEAR")
    cy.contains("p", "BESPOKE")
    cy.contains("p", "PAEDIATRIC")

    cy.contains("We prioritise your eye health")

    //checking the address and telephone number
    cy.contains(this.data.AddressAdelaide)
    cy.contains(this.data.TelephoneAdelaide)
    cy.contains(this.data.AddressWoodville)
    cy.contains(this.data.TelephoneWoodville)

    //checking the working of subscribe button
    cy.get("#fieldName").type(this.data.SubscribeUser)
    cy.get("#fieldEmail").type(this.data.SubscribeEmail)
    cy.contains("Subscribe")
    cy.contains("Follow us on Instagram and Facebook")

    // //checking the working of the search button by typing input text
    cy.get('[placeholder="Search now."]').click()

    //checking the booking buttons
    cy.contains(this.data.BookA)
    cy.contains(this.data.BookW)
  })

  it("Who We Are Page", function () {
    var data
    cy.visit("who-we-are")

    //checking the images of staff and the desciption of staff
    cy.fixture("staffdata").then((staffdata) => {
      var x = 2
      staffdata.forEach((sdata) => {
        x < 17
        data = sdata.data
        cy.get("#gatsby-focus-wrapper")
          .find("img")
          .should("have.attr", "src", "/images2/icon-logo.png")
          .eq(x)
          .click({ force: true })
        cy.get("#gatsby-focus-wrapper").contains(data)
        x++
      })
    })

    cy.get("#gatsby-focus-wrapper")
      .find("img")
      .should("have.attr", "src", "/images2/icon-logo.png")
      .eq(1)
      .click("")
    cy.contains("What We Do")
    cy.contains("Patient Resources")
    cy.contains("Blog")
    cy.contains("Contact")
    cy.contains("Shop")
    cy.contains("Home")
    cy.contains("Who We Are").click()

    cy.contains("Meet the team")
    cy.contains("Our Optometrists are industry leaders")

    cy.contains(this.data.AddressAdelaide)
    cy.contains(this.data.TelephoneAdelaide)
    cy.contains(this.data.AddressWoodville)
    cy.contains(this.data.TelephoneWoodville)

    cy.get("#fieldName").type(this.data.SubscribeUser)
    cy.get("#fieldEmail").type(this.data.SubscribeEmail)
    cy.contains("Subscribe")
    cy.contains("Follow us on Instagram and Facebook")

    cy.get('[placeholder="Search now."]').click().type("aa")
    //.invoke('show')

    cy.contains(this.data.BookA)
    cy.contains(this.data.BookW)
  })

  it("What We Do", function () {
    cy.visit("what-we-do")
    var servicedata
    //cheking the service categories and the subheadings
    cy.fixture("servicedata").then((servicedata) => {
      servicedata.forEach((serdata) => {
        service = serdata.service
        subhead = serdata.data
        subhead2 = serdata.data1
        cy.get("#gatsby-focus-wrapper").contains(service).click({ force: true })
        cy.contains(subhead)
        cy.contains(subhead2)
      })
    })

    //checking the navigation bar working
    cy.get("#gatsby-focus-wrapper")
      .find("img")
      .should("have.attr", "src", "/images2/icon-logo.png")
      .eq(1)
      .click("")
    cy.contains("Who We Are")
    cy.contains("Patient Resources")
    cy.contains("Blog")
    cy.contains("Contact")
    cy.contains("Shop")
    cy.contains("Home")
    cy.contains("What We Do").click()

    //essential data in between pages
    cy.contains("We do things a little differently here")

    cy.contains(this.data.AddressAdelaide)
    cy.contains(this.data.TelephoneAdelaide)
    cy.contains(this.data.AddressWoodville)
    cy.contains(this.data.TelephoneWoodville)

    //checking the working of subscribe button
    cy.get("#fieldName").type(this.data.SubscribeUser)
    cy.get("#fieldEmail").type(this.data.SubscribeEmail)
    cy.contains("Subscribe")
    cy.contains("Follow us on Instagram and Facebook")

    //checking the working of the search button by typing input text
    cy.get('[placeholder="Search now."]').click().type("aa").invoke("show")

    cy.contains(this.data.BookA)
    cy.contains(this.data.BookW)
  })

  it("Patient Resources", function () {
    cy.visit("/patient-resources")
    var patientresources
    //cheking the service categories and the options inside it, and then the article data
    cy.fixture("patientresources").then((patientresources) => {
      patientresources.forEach((pdata) => {
        category = pdata.category
        option1 = pdata.option1
        data1 = pdata.data1
        option2 = pdata.option2
        data2 = pdata.data2
        cy.get("#gatsby-focus-wrapper")
          .contains(category)
          .click({ force: true })
        cy.contains(option1).click({ force: true })
        cy.contains(data1)
        cy.get("#gatsby-focus-wrapper")
          .find("img")
          .should("have.attr", "src", "/images2/icon-logo.png")
          .eq(1)
          .click({ force: true })
        cy.contains("Patient Resources").click({ force: true })
        cy.contains(category).click({ position: "bottom" }, { force: true })
        cy.contains(option2).click({ force: true })
        cy.contains(data2)
        cy.get("#gatsby-focus-wrapper")
          .find("img")
          .should("have.attr", "src", "/images2/icon-logo.png")
          .eq(1)
          .click({ force: true })
        cy.contains("Patient Resources").click({ force: true })
      })
    })

    //checking the navigation bar working
    cy.get("#gatsby-focus-wrapper")
      .find("img")
      .should("have.attr", "src", "/images2/icon-logo.png")
      .eq(1)
      .click("")
    cy.contains("Who We Are")
    cy.contains("Blog")
    cy.contains("Contact")
    cy.contains("Shop")
    cy.contains("Home")
    cy.contains("What We Do")
    cy.contains("Patient Resources").click()

    //essential data in between pages
    cy.contains("Your eye care routine will often involve at-home care ")

    cy.contains(this.data.AddressAdelaide)
    cy.contains(this.data.TelephoneAdelaide)
    cy.contains(this.data.AddressWoodville)
    cy.contains(this.data.TelephoneWoodville)

    //checking the working of subscribe button
    cy.get("#fieldName").type(this.data.SubscribeUser)
    cy.get("#fieldEmail").type(this.data.SubscribeEmail)
    cy.contains("Subscribe")
    cy.contains("Follow us on Instagram and Facebook")

    //checking the working of the search button by typing input text
    cy.get('[placeholder="Search now."]').click().type("aa").invoke("show")

    cy.contains(this.data.BookA)
    cy.contains(this.data.BookW)
  })

  it("Blog", function () {
    cy.visit("/blog")

    //cheking the each blog inside the blog list
    cy.fixture("bloglist").then((bloglist) => {
      bloglist.forEach((blogdata) => {
        title = blogdata.title
        author = blogdata.author
        data = blogdata.data
        cy.get("#gatsby-focus-wrapper").contains(title).click({ force: true })
        cy.contains(author)
        cy.contains(data)
      })
    })

    //checking the navigation bar working
    cy.get("#gatsby-focus-wrapper")
      .find("img")
      .should("have.attr", "src", "/images2/icon-logo.png")
      .eq(1)
      .click("")
    cy.contains("Who We Are")
    cy.contains("Contact")
    cy.contains("Shop")
    cy.contains("Home")
    cy.contains("What We Do")
    cy.contains("Patient Resources")
    cy.contains("Blog").click()

    //essential data in between pages
    cy.contains(
      "Our blog provides a platform for our practitioners and staff to share a little more about their professional interests and experiences."
    )

    //checking blogs
    cy.contains("The latest addition at Innovative Eye Care")
    cy.contains(this.data.AddressAdelaide)
    cy.contains(this.data.TelephoneAdelaide)
    cy.contains(this.data.AddressWoodville)
    cy.contains(this.data.TelephoneWoodville)

    //checking the working of subscribe button
    cy.get("#fieldName").type(this.data.SubscribeUser)
    cy.get("#fieldEmail").type(this.data.SubscribeEmail)
    cy.contains("Subscribe")
    cy.contains("Follow us on Instagram and Facebook")

    //checking the working of the search button by typing input text
    cy.get('[placeholder="Search now."]').click().type("aa").invoke("show")

    cy.contains(this.data.BookA)
    cy.contains(this.data.BookW).click()
  })

  it("Contact", function () {
    cy.visit("/contact")

    //checking the navigation bar working
    cy.get("#gatsby-focus-wrapper")
      .find("img")
      .should("have.attr", "src", "/images2/icon-logo.png")
      .eq(1)
      .click("")
    cy.contains("Who We Are")
    cy.contains("Blog")
    cy.contains("Shop")
    cy.contains("Home")
    cy.contains("What We Do")
    cy.contains("Patient Resources")
    cy.contains("Contact").click()

    cy.contains(this.data.AddressAdelaide)
    cy.contains(this.data.TelephoneAdelaide)
    cy.contains(this.data.AddressWoodville)
    cy.contains(this.data.TelephoneWoodville)

    //checking the working of subscribe button
    cy.get("#fieldName").type(this.data.SubscribeUser)
    cy.get("#fieldEmail").type(this.data.SubscribeEmail)
    cy.contains("Subscribe")
    cy.contains("Follow us on Instagram and Facebook")

    //checking the working of the search button by typing input text
    cy.get('[placeholder="Search now."]').click().type("aa").invoke("show")

    cy.contains(this.data.BookA)
    cy.contains(this.data.BookW).click()
  })
})
