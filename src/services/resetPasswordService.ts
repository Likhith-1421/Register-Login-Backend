//import { resetPasswords } from "../repo/resetPasswordRepo"
import { resetPassword } from "../repo/resetPasswordRepo"
import { resetPasswords } from "../repo/resetPasswordRepo"
import bcrypt from "bcrypt"




const resetPasswordService = async(data:any,user:any)=>
{
      const {newPassword, conformPassword, otp} = data
   // 
console.log(user)
  
    if(!user)
    {
        throw new Error("User Not Found")
    }
if(data.otp !== user?.otp)
{
    throw new Error("Invalid Otp")
}
if(!user?.otpExpiry)
{
    throw new Error("OTP is invalid or expired ")
}
if(user?.otpExpiry < new Date())
{
   throw new Error("Otp Expired")
}

   console.log(newPassword)
    const findUser = await resetPasswords(user)
    if(data.newPassword == findUser?.password)
    {
        throw new Error("Password Doesn't Match with Previous Passwords")
    }
    
    if(newPassword !== conformPassword)
    {
      throw new Error("Password doesn't matched")
    }
if(newPassword == conformPassword)
{
    const dataUser =  await resetPassword(data,user)
   return dataUser
}

}
export default resetPasswordService