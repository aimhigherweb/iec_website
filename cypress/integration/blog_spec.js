describe("Tests for Blog.", function () {

    beforeEach(function () {
        cy.fixture("bloglist").then(function (data) {
            this.data = data
        })
    })

    it("Visits Blog.", function () {
        var servicedata = this.data
        cy.visit("")
        cy.get('[data-cy="menu"]').should("be.visible").click()
        cy.contains("Blog").click()
        cy.url().should('eq', 'http://localhost:8000/blog')
        cy.contains("Blog")

        cy.fixture("bloglist").then((bloglist) => {
            bloglist.forEach((blogdata) => {
                var title = blogdata.title
                cy.get('[data-cy="article-detail"]').contains(title)
               
            })
        })



    })
})