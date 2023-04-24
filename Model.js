const mongoose=require("mongoose")
const mongooseSchema=new mongoose.Schema({
        title:{
        type:String,
        required:true
    },
    id:{
        type:Number
    },
    tasks:[]
})
const Tasks=mongoose.model("Model",mongooseSchema)
module.exports=Tasks;