const mongoose=require("mongoose")
function connectDb(){
mongoose.connect("mongodb+srv://ragesh_j:10xacademy@cluster0.ov2ibq8.mongodb.net/TaskApi")
const connection=mongoose.connection
connection.on("connected",()=>{
    console.log("connected to db")
})
}
connectDb()
module.exports=mongoose;