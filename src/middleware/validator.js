'use strict'
module.exports=(req,res,next)=>{
    console.log(req.query.name);
    const result=req.query.name ? next() :next("if no name in the query string")
    
    // res.status(500).json(result);
}