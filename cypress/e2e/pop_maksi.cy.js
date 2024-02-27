describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://popr.uni-lj.si/unauth/student/login')
  
    cy.wait(500)

    
    cy.get('.btn-primary').contains('Prijavite se').click()
    cy.wait(2000)
    cy.origin('https://login.microsoftonline.com', () => {
      cy.get("[type='email']").type('ime@student.uni-lj.si{enter}')
    
      //cy.get('[type="submit"]').click()
      cy.wait(2000)
      cy.get("[type='password']").type("password{enter}")
      cy.wait(2000)
      cy.get('[type="submit"]').click()
    })
    cy.wait(2000)
    
    cy.visit('https://popr.uni-lj.si/student/home.html')
    cy.wait(1000)
    cy.get('.dash-cta-link').contains('Events').click()
    cy.wait(1000)
    cy.get('.btn-primary').contains('Search events').click()
    cy.wait(2000)
    cy.contains('Košarka')
    .parent()
    .click()
    //cy.visit('https://popr.uni-lj.si/unauth/student/login')
  })
})