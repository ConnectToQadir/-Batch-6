const express = require('express')
const app = express()
const mongoose = require("mongoose")
const cookieParser = require('cookie-parser')
const jwt = require('jsonwebtoken')
const UserModel = require('./models/users')





// Middleware
app.set('view engine', "ejs")


// Middleware to read json data from req
app.use(express.json())
app.use(cookieParser())

// Middleware of Router
app.use('/api/products', require('./routes/products'))
app.use('/api/users', require('./routes/users'))






app.get("/", (req, res) => {
    res.render("index")
})


app.get("/register", (req, res) => {
    res.render("register")
})

app.get("/login", (req, res) => {
    res.render("login")
})


app.get("/products", async (req, res) => {

    if (req.cookies.token) {


        // Checking token validity
        try {
            var payload = jwt.verify(req.cookies.token, 'ajsdkfj@*^@&132u72')

            var user = await UserModel.findById(payload.id)

            res.render("products", {
                user: user
            })


        } catch (error) {
            res.redirect('/login')
        }


    } else {
        res.redirect('/login')
    }

})


app.get("/add-product", (req, res) => {
    res.render("add-product")
})






mongoose.connect('mongodb://127.0.0.1:27017/batch6').then(() => {
    console.log("Connected!")
}).catch(() => {
    console.log("Not Connected!")
})



app.listen(5000, () => {
    console.log("Backend is Running...")
})