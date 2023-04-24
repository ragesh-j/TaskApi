const express=require("express")
const app=express()
const router=express.Router()
const Model=require("./Model")
const task=[]
router.post("/v1/tasks",async (req,res)=>{
    
    try{
    const data=await Model.create({
        title:req.body.title,
        id:task.length+1
    })
    
    task.push(data)
    task.save()
    console.log(task)
    return res.status(201).json({
        id:task.length
    })
}
catch(e){
    return res.status(400).json({
        message:e.message
    })
}
})
router.get("/v1/tasks", async (req,res)=>{
    try{
        return res.status(200).json({
            task
        })
    }
    catch(e){
        console.log(e)
    }
})

module.exports=router;