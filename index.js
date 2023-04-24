const mongoose=require("mongoose")
const express=require("express")
const db=require("./db.js")
const app=express()
app.use(express.json())
const TaskRouter=require("./router.js")
app.use("/",TaskRouter)
app.listen(8000,()=>{
    console.log("app is running on port 8000")
})

