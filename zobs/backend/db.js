const mongoose= require('mongoose')

const connectDb=async()=>{
    try{
        const connect= await mongoose.connect("mongodb+srv://zobs:ajayajay@cluster0.baxv44i.mongodb.net/?retryWrites=true&w=majority")
        console.log("you are connected to the  mongdb")

    }
    catch(error){
        console.log("  connectDb Error  ", error)
    }

}
connectDb();
module.exports=connectDb