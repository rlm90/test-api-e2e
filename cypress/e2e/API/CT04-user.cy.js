describe('Serverest API test', () => {
    it('should return a list of users', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('should create a new user', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/usuarios',
            body: {
                nome: "Testador Serverest API",
                email: "testador@serverestapis.com.br",
                password: "1234",
                administrador: "true"
            }
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })
})