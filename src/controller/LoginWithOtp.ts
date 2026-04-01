import LoginWithOtpService from "../services/LoginWithOtpService"

const LoginWithOtpController = async(req:any,res:any)=>
{
    try{
        const Data = req.body

  const result = await LoginWithOtpService(Data)
  res.status(200).json({message:"Otp Verified Successfully",result})
    }
    catch(err:any)
    {
        res.status(400).json({message:err.message})
    }
     


}
export default LoginWithOtpController