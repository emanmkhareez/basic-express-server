'use strict'
module.exports= (req,res,next)=>{
    console.log('eman mkhareez',req.method,req.path)

    next();

}