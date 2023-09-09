const express = require('express')
const app = express()
const mongoose = require("mongoose")







// Middleware


// Middleware to read json data from req
app.use(express.json())

app.use('/api/products',require('./routes/products'))
app.use('/api/users',require('./routes/users'))





mongoose.connect('mongodb://127.0.0.1:27017/batch6').then(()=>{
    console.log("Connected!")
}).catch(()=>{
    console.log("Not Connected!")
})



app.listen(5000,()=>{
    console.log("Backend is Running...")
})