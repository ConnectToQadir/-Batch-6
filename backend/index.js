const express = require('express')
const app = express()
const mongoose = require("mongoose")







// Middleware
app.set('view engine',"ejs")


// Middleware to read json data from req
app.use(express.json())

// Middleware of Router
app.use('/api/products',require('./routes/products'))
app.use('/api/users',require('./routes/users'))






app.get("/",(req,res)=>{
    res.render("index")
})


app.get("/products",(req,res)=>{
    res.render("products")
})


app.get("/add-product",(req,res)=>{
    res.render("add-product")
})






mongoose.connect('mongodb://127.0.0.1:27017/batch6').then(()=>{
    console.log("Connected!")
}).catch(()=>{
    console.log("Not Connected!")
})



app.listen(5000,()=>{
    console.log("Backend is Running...")
})