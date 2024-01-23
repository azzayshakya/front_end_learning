const mongoose = require ('mongoose')
 
const {Schema} = mongoose;

const LogInUser=new Schema({
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true

    }

})
module.exports=mongoose.model("login",LogInUser)