import prisma from "../services/prisma"

const VerifyOtpRepo =async(Data:any)=>
{
    const {email}= Data
     const FindOtp = await prisma.user.findUnique({
         where :
         {
             email:email,
           
         }
     })
     console.log(FindOtp)
     return FindOtp
}
export default VerifyOtpRepo