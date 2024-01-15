const mongoose = require('mongoose')


const {Schema} = mongoose;

const PostJobSchema= new Schema({
    companyName:{
        type: String,
        // required: true,
    },
    JobTitle:{
        type:String,
        // required:true
    },
    minPrice:{
        type:Number,
        required:true
    },
    maxPrice:{
        type:String,
        // required:true
    },
    salaryType:{
        type:String,
        // required:true
    },
    jobLocation:{
        type:String,
        // required:true
    },
    postingDate:{
        type:String,
        // required:true
    },
    experienceLevel:{
        type:String,
        // required:true
    },
    employmentType:{
        type:String,
        // required:true
    },
    companyLogo:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        // required:true
    }
})
module.exports = mongoose.model("AllJobs" ,PostJobSchema )
