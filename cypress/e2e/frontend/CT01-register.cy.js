describe('Register', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/cadastrarusuarios')
  })

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      cy.screenshot()
    } else {
      cy.screenshot()
    }
  })

  it('Register with success', () => {
    // Insert form to new register
    cy.get('[data-testid="nome"]').type('test tester101')
    cy.get('[data-testid="email"]').type('test@testing101.com')
    cy.get('[data-testid="password"]').type('1234')
    cy.get('[data-testid="cadastrar"]').click()

    // Assert
    cy.get('.alert-link')
      .invoke('text')
      .then((linkText) => {
        cy.log('The link text is: ' + linkText);
      expect(linkText).to.equal('Cadastro realizado com sucesso')
  })
  })

})