const app =  require('../../../app');
const request = require('supertest');


describe('Account', ()=>{
    it('Get Accounts', async() => {
        const response = await request(app).get('/accounts')
        expect(response.status).toBe(200)
    })


    
})