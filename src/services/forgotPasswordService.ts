import { forgotPassword } from "../repo/forgotPasswordRepo"
import { resetPassword } from "../repo/forgotPasswordRepo"
import bcrypt from "bcrypt"




const forgotPasswordService = async(data:any)=>
{
      const {newPassword, conformPassword} = data
     const findUser = await forgotPassword(data)
  
    
   if(!findUser)
   {
      throw new Error("User Not Found")
   }
     
   
 const PasswordCompared = await bcrypt.compare(newPassword&&conformPassword,findUser.password)
 if(PasswordCompared)
 {
      throw new Error("Password Doesn't Match with Previous Password")
 }

   console.log(findUser.password)
   console.log(newPassword)
    
    if(newPassword !== conformPassword)
    {
      throw new Error("Password doesn't matched")
    }
if(newPassword == conformPassword)
{
    const dataUser =  await resetPassword(data)
   return dataUser
}

}
export default forgotPasswordService