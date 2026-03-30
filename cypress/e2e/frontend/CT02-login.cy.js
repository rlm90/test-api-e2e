describe('Login', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/login')
  })

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      cy.screenshot()
    } else {
      cy.screenshot()
    }
  })

  it('Login with success', () => {
    // Login
    cy.get('[data-testid="email"]').type('test@testing101.com')
    cy.get('[data-testid="senha"]').type('1234')
    cy.get('[data-testid="entrar"]').click()

    // Asserts
    cy.get('[data-testid="botaoPesquisar"]').should('contain.text', 'Pesquisar')
    cy.get('h1').should('contain.text','Serverest Store')
  })

})