import express from "express"
import RegisterController from "./src/controller/RegisterController"
import LoginController from "./src/controller/LoginController"
import forgotPasswordController from "./src/controller/resetPasswordController"
import LoginOtpController from "./src/controller/LoginOtpController"
import VerifyOtpController from "./src/controller/VerifyOtpController"
import GetProfileController from "./src/controller/GetProfileController"
import VerifyToken from "./src/Middleware/authMiddleWare"


import cors from "cors"
import cookieParser from "cookie-parser"
import resetPasswordController from "./src/controller/resetPasswordController"



const app = express()


app.use(cors(
       {
           origin : "http://localhost:3002",
           credentials:true
       }
       
))

app.use(express.json())
app.use (cookieParser())
// app.use("/test",(req:any,res:any)=>
// {
//     res.send("Hello Task")
// })

app.use('/Register', RegisterController)
app.use('/Login', LoginController)
app.use('/forgotPassword', VerifyToken,resetPasswordController)
app.use('/LoginOtp', LoginOtpController)
app.use('/VerifyOtp', VerifyOtpController)
app.use('/GetProfile', VerifyToken,GetProfileController)





app.listen(5555,()=>
{
       console.log("Server Started Successfully")
})