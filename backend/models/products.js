const mongoose = require('mongoose')



var productsSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        unique:true
    },
    price:{
        type:Number,
        required:true
    },
    desc:{
        type:String,
        trim:true,
    },
    stock:{
        type:Number,
        required:true,
    },
},{timestamps:true})

module.exports = mongoose.model('products',productsSchema)