describe("Tests for Who We Are.", function () {

    beforeEach(function () {
        cy.fixture("whowearedata").then(function (data) {
            this.data = data
        })
    })


    it("Visits Who We Are.", function () {
        cy.visit("")
        cy.get('[data-cy="menu"]').should("be.visible").click()
        cy.contains("Who We Are").should("be.visible").click()
        cy.url().should('eq', 'http://localhost:8000/who-we-are')

        cy.contains("Meet the team")
        cy.contains("Our Optometrists are industry leaders. Our special interests include contact lenses, paediatric vision and theraputic optometry.")
        cy.contains(this.data.WhoWeAre1)
        cy.contains(this.data.WhoWeAre2)
    })

})