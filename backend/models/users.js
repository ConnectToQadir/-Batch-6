const mongoose = require('mongoose')

var usersSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true,
        trim:true,
    },
    photo:{
        type:String
    },
    address:[
        {
            streetNo:String,
            houseNo:String,
            country:String,
            postalCode:String
        }
    ],
    email:{
        type:String,
        unique:true,
        required:true
    },
    username:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    password:{
        type:String,
        required:true,
    },
},{timestamps:true})

module.exports = mongoose.model('users',usersSchema)