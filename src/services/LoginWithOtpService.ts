import {LoginWithOtpRepo} from "../repo/LoginWithOtpRepo"
import { findUser } from "../repo/LoginWithOtpRepo"
const LoginWithOtpService = async(Data:any, )=>
{
   const user =  await findUser(Data)
//   if(!user)
//   {
//     throw new Error("User Not Found")
//   }
  if(Data.otp !== user?.otp)
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
if(Data.otp == user.otp)
{
    await LoginWithOtpRepo(Data)
  
}


}
export default LoginWithOtpService