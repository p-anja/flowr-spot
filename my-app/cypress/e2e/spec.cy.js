describe('Login and logout', () => {
  beforeEach(() =>{
    cy.viewport(1280, 720)
  })
  it('open login modal', () => {
    cy.visit('/')
    cy.contains('Login').click()
    cy.wait(2000)
    cy.get('[data-cy="login-form"]').should('be.visible')

  })

  it('login', () =>{
    cy.get('[data-cy="email"]').type('anja.pesic@gmail.com')
    cy.get('[data-cy="password"]').type('anjapesic')
    cy.contains('Login to your account').click()
    cy.contains('OK').click()
  })

  it('open logout modal', () =>{
    cy.get('[data-cy="profile-pic"]').click()
    cy.wait(2000)
    cy.contains('Logout').should('be.visible')
  })

  it('logout', () => {
    cy.contains('Logout').click()
    cy.contains('OK').click()
  })
})