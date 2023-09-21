const ProductsModel = require('../models/products')
const router = require('express').Router()



router.post("/", async(req,res)=>{
    try {
        var product = await ProductsModel.create(req.body)
        res.json(product)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/',async(req,res)=>{
    try {
        var products = await ProductsModel.find()
        res.json(products)
    } catch (error) {
        res.send(error.message)
    }
})

router.get('/:id',async(req,res)=>{
    try {
        var product = await ProductsModel.findById(req.params.id)
        res.json(product)
    } catch (error) {
        res.send(error.message)
    }
})

router.delete('/:id',async(req,res)=>{
    try {
        var product = await ProductsModel.findByIdAndDelete(req.params.id)
        res.send("Deleted!")
    } catch (error) {
        res.send(error.message)
    }
})

router.put('/:id',async(req,res)=>{
    try {
        var product = await ProductsModel.findByIdAndUpdate(req.params.id,{$set:req.body})
        res.json({
            success:true,
            message:"Product Updated!"
        })
    } catch (error) {
        res.send(error.message)
    }
})


module.exports = router