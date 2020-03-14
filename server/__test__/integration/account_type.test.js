const request = require('supertest');

const app =  require('../../../app');

describe('Get Account Type', () => {
    it('Get All Account Types', async () => {

        /* Requisiton http */
        const response = await request(app).get('/account-types')
        expect(response.status).toBe(200)
        
    })

    it('GetAccount Type by Id', async () => {

        const response = await request(app).get('/account-types/1');
        expect(response.status).toBe(200)
    })

    it('Post Account Type', async () => {
        const response = await request(app).post('/account-types')
            .send({name:`Teste`});

            expect(response.status).toBe(201);
    })

})
