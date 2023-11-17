const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express();


app.use(bodyParser.urlencoded({extended:false}));
app.use(express.json())
// Schema

const productSchema = new mongoose.Schema({
    name:String,
    description:String,
    price:Number

})

//model

const Product = new mongoose.model("Product",productSchema)

app.post("/api/v1/product/new",async(req,res)=>{
    const product =await Product.create(req.body)

    res.status(200).json({
        success:true,
        product
    })
})




app.listen(4500,()=>{
    console.log("server is running")
})
