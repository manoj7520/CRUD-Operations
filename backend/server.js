const express=require('express')
const Connect=require('./connection')
require('dotenv').config()
const bodyParser = require('body-parser');
const cors = require('cors')
const app=express()

//middlewares
app.use(express.json())
app.use(cors())
app.use('/',cors(),require('./controller.js'))
app.use(bodyParser.json());
app.use(express.urlencoded({extended: false}))

//server
 port=process.env.Port_Num
Connect()
app.listen(port,(req,res)=>{
    console.log(`listening on ${port}`)
})