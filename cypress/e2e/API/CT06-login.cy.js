describe('Serverest API test', () => {
    it('should do login', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/login',
            body: {
                email: "fulano@qa.com",
                password: "teste"
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})