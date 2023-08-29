const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.get("/api/login", (req, res) => {
    // Data stored in DB
    var data = { username: "admin", password: "admin123" }


    if (req.query.username === data.username && req.query.password === data.password) {
        res.redirect("/dashboard")
    } else {
        res.send("Invalid Username or Password!")
    }
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/dashboard', (req, res) => {
    res.render('dashboard')
})



app.get('/print-req',(req,res)=>{
    console.log(req)
    res.send("Request print ho gayee hai console me ja k check kar le")
})


app.listen(3000, () => {
    console.log("Backend is Ready...")
})