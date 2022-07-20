let express=require("express")
let router=express.Router()

router.get("/",async(req,res)=>{
    try {
        
        res.send("Demo routing")

    } catch (error) {
        res.send(error)
    }
})

module.exports=router