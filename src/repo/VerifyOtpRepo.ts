import prisma from "../services/prisma"

const VerifyOtpRepo =async(Data:any)=>
{
    const {email,otp}= Data
     const FindOtp = await prisma.user.findUnique({
         where :
         {
             email:email,
             otp:otp
         }
     })
     console.log(FindOtp)
     return FindOtp
}
export default VerifyOtpRepo