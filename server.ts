import express from "express"
import RegisterController from "./src/controller/RegisterController"
import LoginController from "./src/controller/LoginController"
import forgotPasswordController from "./src/controller/forgotPasswordController"
import LoginOtpController from "./src/controller/LoginOtpController"
import VerifyOtpController from "./src/controller/VerifyOtpController"




const app = express()

app.use(express.json())



// app.use("/test",(req:any,res:any)=>
// {
//     res.send("Hello Task")
// })

app.use('/Register', RegisterController)
app.use('/Login', LoginController)
app.use('/forgotPassword', forgotPasswordController)
app.use('/LoginOtp', LoginOtpController)
app.use('/VerifyOtp', VerifyOtpController)



app.listen(5555,()=>
{
       console.log("Server Started Successfully")
})