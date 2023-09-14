const mongoose = require('mongoose')
const express=require('express')
require('dotenv').config()

const userName=process.env.User_Name
const password=process.env.Password

const Connect=async()=>{
    const url=`mongodb+srv://${userName}:${password}@cluster0.o0y3kco.mongodb.net/?retryWrites=true&w=majority`
    try {
        await mongoose.connect(url, { useNewUrlParser: true,
            useNewUrlParser: true,
            useUnifiedTopology: true, });
        console.log('Database connected successfully');
    } catch (error) {
        console.log('Error while connecting with the database ', error.message);
    }
}
module.exports=Connect