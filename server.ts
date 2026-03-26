import express from "express"
import RegisterController from "./src/controller/RegisterController"
import LoginController from "./src/controller/LoginController"
import forgotPasswordController from "./src/controller/forgotPasswordController"


const app = express()

app.use(express.json())



// app.use("/test",(req:any,res:any)=>
// {
//     res.send("Hello Task")
// })

app.use('/Register', RegisterController)
app.use('/Login', LoginController)
app.use('/forgotPassword', forgotPasswordController)



app.listen(5555,()=>
{
       console.log("Server Started Successfully")
})