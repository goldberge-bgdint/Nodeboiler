let express=require("express")
let app=express()


let demoroute=require("./routes/demoroute")
app.use("/demoroute",demoroute)



let port=4000;
app.listen(port,()=>{

    console.log("Application launched on port 4000")

})