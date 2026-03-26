import VerifyOtpService from "../services/VerifyOtpService"


const VerifyOtpController = async(req:any,res:any)=>
{
   try{
           const  Data = req.body
   const VerifyOtp = await VerifyOtpService(Data)
   res.status(200).json({message:"Otp Verified Successfully",VerifyOtp})
   }
   catch(err:any)
   {
       res.status(400).json({message: err.message})
   }
  

}
export default VerifyOtpController