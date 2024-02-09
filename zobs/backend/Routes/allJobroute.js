const express = require('express');
const router= express.Router();
const alljobs = require("../model/PostJob")

router.post("/alljobs",async(req,res)=>{
    // console.log("hey")
    
    
    try{
        // const email=  req.body.email;
        const data = await alljobs.find()
        // console.log("all data",data)         
        res.status(500).json({success:true,data})
    }

    catch(error){
        console.log(error)
    }

   
  })
module.exports = router;
