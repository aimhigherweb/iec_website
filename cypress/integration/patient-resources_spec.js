describe("Tests for Who We Are.", function () {

    beforeEach(function () {
        cy.fixture("patientresources").then(function (data) {
            this.data = data
        })
    })


    it("Visits Patient Resources.", function () {
        cy.visit("")
        cy.get('[data-cy="menu"]').should("be.visible").click()
        cy.contains("Patient Resources").should("be.visible").click()
        cy.url().should('eq', 'http://localhost:8000/patient-resources')
        cy.contains("Patient Resources")

        //cheking the service categories 
        cy.fixture("patientresources").then((patientresources) => {
            patientresources.forEach((pdata) => {
                var category = pdata.category
                cy.get('[data-cy="patient-res-category"]')
                    .contains(category)
           

            })

        })
    })
})