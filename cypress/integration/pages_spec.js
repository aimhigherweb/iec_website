describe('Test Pages', () => {
  it('Home', () => {
    cy.visit('')
    cy.contains('BOOK WITH US');
    cy.contains('WATCH VIDEO');
  });

  it('Who We Are Page', () => {
    cy.visit('')
    cy.contains('Who We Are').click()
    cy.contains('We are a team of industry leader')
    cy.contains('Meet the Team')
  });

  it('What We Do', () => {
    cy.visit('')
    cy.contains('What We Do').click()
    cy.contains('Your eyes are our focus, all day, every day')
  });

  it('Patient Resources', () => {
    cy.visit('')
    cy.contains('Patient Resources').click()
    cy.contains('Your eye care routine will often involve at-home care ')
  });

  it('Contact', () => {
    cy.visit('')
    cy.contains('Contact').click()
    cy.contains('Our Locations')
    cy.contains('Innovative Eye Care has two convenient locations in South Australia - Hutt Street, Adelaide and Port Road, Woodville.')
    cy.contains('Phone: (08) 8231 9341')
    cy.contains('Phone: (08) 8445 9050')
  });

  it('Blog', () => {
    cy.visit('')
    cy.contains('Blog').click()
    cy.contains('The optometrists of Innovative Eye Care have a wide scope of expertise')
  });

  it('Blog Post', () => {
    cy.visit('')
    cy.contains('Blog').click()
    cy.contains('Macula Month 2020').click({force:true})
    cy.contains('Macular Month is about reminding us of the importance of eye health')
    cy.contains('Millie Meegan')
    cy.contains('28 May 2020')
  });
})

