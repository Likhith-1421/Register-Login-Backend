import VerifyOtpRepo from "../repo/VerifyOtpRepo"


const VerifyOtpService = (Data:any)=>
{
      const VerifyOtp = VerifyOtpRepo(Data)
      
     if(!VerifyOtp)
     {
        throw new Error("Otp Required")
     }

}
export default VerifyOtpService