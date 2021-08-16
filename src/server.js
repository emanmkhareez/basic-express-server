'use strict'
const express=require('express')
const server=express()

function start(PORT){
server.listen(PORT,()=>{console.log(`server PORT ${PORT}`)})}

module.exports={
    start
}