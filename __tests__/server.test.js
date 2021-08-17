const supertest =require('supertest')
const server = require('../src/server.js');
const request=supertest(server.server)

describe('express server',()=>{

    it('shoud check the empty domain  works successfully',async()=>{
        //arange
        let param='/';
        let status =200;
        let text='all good 😎'
        //act
        const respons=await request.get(param)
        //assert
        expect(respons.status).toBe(status)
        expect(respons.text).toBe(text)
    })

    it('shoud check the person domain  works successfully',async()=>{
        //arrange
        let param='/person';
        let status=500
        
    //act
    const respons=await request.get(param)
    
    //assert
    expect(respons.status).toBe(status)
    expect(typeof respons.body).toEqual('object')

    });

   it('should check error 500',async () =>{
    //arrange
    let param='/person';
    let status=500;
    //act
    const respons=await request.get(param)
    //assert
    expect(respons.status).toBe(status)
    expect(respons.body.route).toBe(param)
});
it('should check 404 not',async ()=>{
     // arrange
     let param = '/notfound';
     let status = 404;
     // act
     const response = await request.get(param);
     // assert
     expect(response.status).toBe(status);
})
});