describe('Serverest API test', () => {

    it('should return a list of products', () => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos'
        }).then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('should token invalid or expired', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            auth: {
                username: 'fulano@qa.com',
                password: 'teste'
            },
            body: {
                nome: "Redragon Wireless",
                preco: 227,
                descricao: "Mouse",
                quantidade: 120,
                _id: "xWewsdpja"
            },
            failOnStatusCode: false,
        }).then((response) => {
            expect(response.status).to.eq(401)
        })
    })
})