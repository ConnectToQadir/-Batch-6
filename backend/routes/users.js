const UsersModel = require('../models/users')
const router = require('express').Router()
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


router.post("/register",async(req,res)=>{
    try {
        
        var hashedPassword = await bcrypt.hash(req.body.password,10)

        var user = await UsersModel.create({...req.body,password:hashedPassword})
        res.status(201).json({
            success:true,
            message:user
        })


    } catch (error) {

        if(error.code === 11000){

            if(error.keyPattern.email){
                res.status(409).json({
                    success:false,
                    message:"Email Already Exist!"
                })
            }
            if(error.keyPattern.username){
                res.status(409).json({
                    success:false,
                    message:"Username Already Exist!"
                })
            }

            return


        }

        res.status(500).json({
            success:false,
            message:error.message.split(":")[2]
        })
    }
})

router.post("/login",async(req,res)=>{
    try {

        // Find user by username
        var foundUser = await UsersModel.findOne({username:req.body.username})

        if(!foundUser){
            res.status(404).json({
                success:false,
                message:"Invalid Username or Password!"
            })
            return
        }

        // Check Password Validity
        var isPasswordValid = await bcrypt.compare(req.body.password,foundUser.password)
        
        if(!isPasswordValid){
            res.status(404).json({
                success:false,
                message:"Invalid Username or Password!"
            })
            return
        }

        // Generate Token for Session Purpose
        var accessToken = jwt.sign({id:foundUser._id},"ajsdkfj@*^@&132u72",{expiresIn:"15s"})

        // Store token in response cookies
        res.cookie("token",accessToken,{secure:true,httpOnly:true})

        res.status(200).json({
            success:true,
            message:"Login Successfully!"
        })

        
    } catch (error) {
        res.status(500).json({
            success:false,
            message:error.message
        })
    }
})






module.exports = router