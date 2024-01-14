const express=require('express');
const connectDb = require('./db');
const port=5000;
const app= express();


app.get("/",(req,res)=>{
    res.send("hey ajju how are you")
})

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});



