const md5 = require('md5');

describe('Marvel characters', () => {
    it('Listar todos os personagens', () => {
        const date = new Date();
        const timestamp = date.getTime();
        const publicKey = 'a3e543cd7924128ba6fe51ee72b90ac9';
        const privateKey = 'f2c6f13bc525da50e72e37a0ec929d03b33d0e38'
        const hash = md5(timestamp + privateKey + publicKey);

        cy.request(`https://gateway.marvel.com:443/v1/public/characters?ts=${timestamp}&apikey=${publicKey}&hash=${hash}`).then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})

describe('Marvel characters', () => {
    it('Listar cinco personagens', () => {
        const date = new Date();
        const timestamp = date.getTime();
        const publicKey = 'a3e543cd7924128ba6fe51ee72b90ac9';
        const privateKey = 'f2c6f13bc525da50e72e37a0ec929d03b33d0e38'
        const hash = md5(timestamp + privateKey + publicKey);

        cy.request(`https://gateway.marvel.com:443/v1/public/characters?limit=5&ts=${timestamp}&apikey=${publicKey}&hash=${hash}`).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.deep.eq([1011334, "3-D Man"])
        })
    })
})