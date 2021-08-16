const { describe, beforeEach } = require('@jest/globals');
const validatorMiddleware  = require('../src/middleware/validator');

describe('validator model',()=>{
 
    let consoleSpy;
    let req={
        query:{}

    };
    let res={};
    let next=jest.fn()//spy on next method

    beforeEach(()=>{
        consoleSpy = jest.spyOn(console,'log').mockImplementation();
      })
      afterEach(()=>{
        consoleSpy.mockRestore();
      })

    it('name should found',()=>{
        validatorMiddleware(req,res,next);
        req.query.name = 'eman';
        expect(consoleSpy).toHaveBeenCalled()
      })
      it('moves to the next middleware',()=>{
        validatorMiddleware(req,res,next);
        expect(next).toHaveBeenCalledWith();
      })
    });





