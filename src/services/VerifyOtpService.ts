import {VerifyOtpRepo} from "../repo/VerifyOtpRepo"



const VerifyOtpService = async(Data:any)=>
{
    
     const VerifyOtp = await VerifyOtpRepo(Data)
    
     
      // console.log(VerifyOtp) 
   
     if(!Data.otp)
     {
        throw new Error("Please Enter Otp")
     }
     if(VerifyOtp?.otp !== Data.otp)
     {
        throw new Error("Invalid Otp")
     }
     if(!VerifyOtp?.otpExpiry)
     {
         throw new Error("OTP is invalid or expired ")
     }
     if(VerifyOtp?.otpExpiry < new Date())
     {
        throw new Error("Otp Expired")
     }

    
     if(!VerifyOtp)
     {
        throw new Error("User Not Found")
     }



}
export default VerifyOtpService