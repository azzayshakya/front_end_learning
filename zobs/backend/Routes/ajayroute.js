const express = require('express');
const router= express.Router();
const userJob= require("../model/UserJob")

router.post("/ajay",async(req,res)=>{
    console.log("hey")
    const email= req.body.email;
    try{
        const data = await userJob.findOne({email})
        // console.log(data)
         
        res.status(500).json({success:true,data})
    }

    catch(error){
        console.log(error)
    }

   
  })



module.exports = router;
