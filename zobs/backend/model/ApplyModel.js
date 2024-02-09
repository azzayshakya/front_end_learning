const mongoose= require('mongoose')
const {Schema} = mongoose;


const UserJob = new Schema({
    jobid:{
        type:String,
        // default:true
    },
    jobtitle:{
        type:String,
        // default:true
    },

    applicant:{
        type:Array,
        // default:true
    }
})

module.exports=mongoose.model("applied jobs",UserJob)