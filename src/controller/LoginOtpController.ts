import LoginOtpService from "../services/LoginOtpSevice"


const LoginOtpController = async(req:any,res:any) =>
{

    try{
           const Data = req.body
    const LoginOtp =await  LoginOtpService(Data)
    res.status(200).json({message: " Otp sent successfully"},LoginOtp)
    }
    catch(err:any)
    {
        res.status(400).json({message:err.message})
    }
 


}

export default LoginOtpController