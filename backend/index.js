const express = require('express')
const app = express()
const mongoose = require('mongoose')


app.use(express.static('public'))
app.set('view engine','ejs')


const coursesModel = mongoose.model("courses",new mongoose.Schema({
    title:String,
    description:String,
    fee:Number,
    rating:Number
}))


app.get('/',(req,res)=>{
    res.render('home')
})


app.get('/add-course',(req,res)=>{
    res.render('addCourse')
})


app.get('/api/addCourse',async (req,res)=>{
    await coursesModel.create(req.query)
    res.send("Course Submitted Successfully!")
})



mongoose.connect("mongodb://127.0.0.1:27017/edify-college")
.then(()=>console.log("Connected!"))
.catch(()=>console.log("Not Connected!"))


app.listen(2500,()=>{
    console.log("Server is Running on Port 2500")
})