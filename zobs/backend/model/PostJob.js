const mongoose = require('mongoose')


const {Schema} = mongoose;

const PostJobSchema= new Schema({
    CompanyName:{
        type: String,
        required: true,
    },
    JobTitle:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("AllJobs" ,PostJobSchema )
