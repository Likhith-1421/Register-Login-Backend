import nodemailer from "nodemailer"
import dotenv from "dotenv"
import {LoginOtpRepo} from "../repo/LoginOtpRepo"
import { FindUser } from "../repo/LoginOtpRepo"




    
    
export const LoginOtpService = async(Data:any)=>
{

   const FindUserEmail = await FindUser(Data)
    //console.log(FindUserEmail?.email)

    if(!FindUserEmail)
    {
        throw new Error("We need you to register first")
    }
    const {email} = Data

   

    
    const  transport = nodemailer.createTransport({
        service : "gmail",
        auth : 
        {
             user : process.env.EMAIL_EMAIL,
             pass : process.env.PASS_KEY,
        }
     })
     
     const Otp = await LoginOtpRepo(Data)
     


     await  transport.sendMail({
           
        from : process.env.EMAIL_EMAIL,
        to : email,
        subject : "OTP VERIFICATION",
        html :

        `
          <h1>Otp  Verification</h1>
            <p>YOUR OTP IS :</p>
              <div style="border:1px solid white; width:100px; text-align:center; background-color:#d3d3d3; width:100%; height:70px; line-height:50px;border-radious:10px">
             <h2>${Otp.otp}</h2>
            </div>
              <p>THIS OTP IS VALID FOR 1 MINUTE</p>
            <p>PLEASE DO NOT SHARE THIS OTP WITH ANYONE</p>
            <p>THANK YOU</p>

        `
     })

}
export default LoginOtpService

