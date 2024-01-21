const express=require('express');
const connectDb = require('./db');
const port=5000;
const app= express();
const cors = require('cors');
app.use(cors())


app.get("/",(req,res)=>{
    res.send("hey ajju how are you")
})
app.use(express.json());
app.use(require("./Routes/PostJob"));
app.use(require("./Routes/SignUpRoute"))

app.listen(port, () => {
    console.log(`App is running at http://localhost:${port}`);
});



