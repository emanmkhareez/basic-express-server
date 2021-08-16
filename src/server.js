'use strict'
const express=require('express')
const server=express()

const handel404error = require('./error-handlers/404.js')
const handel500error = require('./error-handlers/500.js')
const validator=require('./middleware/validator.js')
const logger=require('./middleware/logger')
function start(PORT){
server.listen(PORT,()=>{console.log(`server PORT ${PORT}`)})}

server.use(logger)
//localhost:3001/
server.get('/',handelinghome)
// localhost:3001/person
server.get('/person',validator,personhandeling)


function handelinghome(req,res){
    res.send('all good 😎')
} 
//function to send name as json format

function personhandeling(req,res){
 
let obj={
    name:req.query.name

}
res.json(obj)

}


server.use('*', handel404error)
server.use(handel500error)


module.exports={
    start,
    server
}