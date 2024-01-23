const express = require ("express")
const router = express.Router();
const users = require("../model/SignUpUserModel")

router.post("/SignUp",async(req,res)=>{

    try{
        const {
            name,
            email,
            mobileNumber,
            password
        } = req.body;

        await users.create({
            name,
            email,
            mobileNumber,
            password
        }
        )
        res.status(201).json({success:true,message:"sign up successfully"})

    }
    catch(error){
        console.log("SignUp route error",error)
        res.status(500).json({success:false,message:"SignUp route error"})
    }

})
module.exports=router;