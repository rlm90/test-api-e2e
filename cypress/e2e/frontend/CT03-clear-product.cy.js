describe('Clear product', () => {

  beforeEach(() => {
    cy.visit('https://front.serverest.dev/home')
  })

  afterEach(function () {
    if (this.currentTest.state === 'passed') {
      cy.screenshot()
    } else {
      cy.screenshot()
    }
  })

  it('Clear product with success', () => {
    // Login
    cy.get('[data-testid="email"]').type('test@testing101.com')
    cy.get('[data-testid="senha"]').type('1234')
    cy.get('[data-testid="entrar"]').click()

    // Add first product on list
    cy.get('[data-testid="adicionarNaLista"]').first().click()

    // Clear product on cart
    cy.get('[data-testid="limparLista"]').click()

    // Asserts
    cy.get('[data-testid="shopping-cart-empty-message"]').should('contain.text','Seu carrinho está vazio')
  })

})