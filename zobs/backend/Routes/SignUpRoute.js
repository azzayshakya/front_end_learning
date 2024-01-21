const express = require ("express")
const router = express.Router();
const users = require("../model/SignUpUserModel")

router.post("/SignUp",async(req,res)=>{

    try{
        const {
            name
        } = req.body;

        await users.create({
            name
        }
        )
        res.status(201).json({status:sucess,message:"sign up successfully"})

    }
    catch(error){
        console.log("SignUp route error",error)
        res.status(500).json({sucess:false,message:"SignUp route error"})
    }

})
module.exports=router;